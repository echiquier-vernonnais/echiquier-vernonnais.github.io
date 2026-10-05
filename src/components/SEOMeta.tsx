import { Helmet } from "react-helmet-async";
import { HOST, ROUTES } from "./Routes";

function buildTitle(title?: string): string {
  const baseTitle = "Échiquier Vernonnais";
  return title ? `${title} | ${baseTitle}` : baseTitle;
}

function buildCanonical(path?: string): string {
  const res = new URL(path ?? "/", HOST).toString()
  if (res.endsWith("/")) {
    return res.slice(0, -1);
  }
  return res;
}


export default function SEOMeta({ routeKey }: { routeKey: keyof typeof ROUTES }) {
  const desc = ROUTES[routeKey].description;
  const title = buildTitle(ROUTES[routeKey].label);
  const canonical = buildCanonical(ROUTES[routeKey].path);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="author" content="Échiquier Vernonnais" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </Helmet>
  )
}
