import type {
  PreviewData,
  GetServerSidePropsResult,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import { useTranslations } from "next-intl";
import type { ParsedUrlQuery } from "querystring";

function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div>
      <h1>{t("NotFound")}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      context,
    },
  };
}

export default NotFound;
