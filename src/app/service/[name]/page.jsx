import ServicesData from "../../api/service.json";
import ServiceDetails from "../../components/common/serviceDetails";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { name } = await params;

  const service = ServicesData.find(
    (item) => item.name === decodeURIComponent(name)
  );

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}