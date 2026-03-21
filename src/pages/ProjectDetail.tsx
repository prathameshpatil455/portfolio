import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";

import { getProjectBySlug } from "../data/projects";

const siteBaseUrl = () =>
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? window.location.origin : "");

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isDarkMode } = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme,
  );

  const project = slug ? getProjectBySlug(slug) : undefined;

  const canonicalPath = slug ? `/projects/${slug}` : "/";
  const ogAbsolute = useMemo(() => {
    if (!project) return "";
    const base = siteBaseUrl();
    const path = project.ogImage || project.image;
    return path.startsWith("http") ? path : `${base}${path}`;
  }, [project]);

  const pageUrl = useMemo(
    () => `${siteBaseUrl()}${canonicalPath}`,
    [canonicalPath],
  );

  const jsonLd = useMemo(() => {
    if (!project) return null;
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      image: ogAbsolute,
      applicationCategory: "DeveloperApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  }, [project, ogAbsolute]);

  if (!slug || !project) {
    return <Navigate to="/" replace />;
  }

  const pageTitle = `${project.title} | Prathamesh Portfolio`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={project.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogAbsolute} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={ogAbsolute} />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>

      <div
        className={`min-h-screen pt-24 pb-16 px-4 md:px-12 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Link
              to="/#projects"
              className={`inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <ArrowLeft className="w-4 h-4" aria-hidden />
              Back to projects
            </Link>

            <div
              className={`rounded-xl overflow-hidden border mb-8 ${
                isDarkMode ? "border-dark-200 bg-dark-100" : "border-gray-200"
              }`}
            >
              <div className="aspect-[16/9] w-full bg-gray-900">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h1>

            <p
              className={`text-lg mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.featuredTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode
                      ? "bg-dark-200 text-gray-300"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className={`mb-10 text-base md:text-lg leading-relaxed max-w-3xl ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>{project.longDescription}</p>
            </div>

            {project.media && (
              <div
                className={`mb-10 rounded-xl border overflow-hidden ${
                  isDarkMode ? "border-dark-200" : "border-gray-200"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase tracking-wide px-4 pt-4 ${
                    isDarkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {project.media.type === "video" ? "Demo video" : "Demo GIF"}
                </p>
                {project.media.type === "video" ? (
                  <video
                    className="w-full max-h-[480px] bg-black"
                    controls
                    playsInline
                    poster={project.image}
                    src={project.media.url}
                  />
                ) : (
                  <img
                    src={project.media.url}
                    alt={project.media.caption || "Demo animation"}
                    className="w-full max-h-[480px] object-contain bg-black/80"
                    loading="lazy"
                  />
                )}
                {project.media.caption && (
                  <p
                    className={`text-sm px-4 py-3 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.media.caption}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-600 transition-colors"
                >
                  Live demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border transition-colors ${
                    isDarkMode
                      ? "border-dark-200 text-gray-200 hover:bg-dark-200"
                      : "border-gray-300 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  View code
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
