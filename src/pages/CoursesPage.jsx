import { CourseCatalog } from "@/features/courses/CourseCatalog";
import { useSeoMeta } from "@/hooks/useSeoMeta";

export const CoursesPage = () => {
  useSeoMeta({
    title: "Networking Courses | Dev Fraol Academy",
    description: "Explore networking-focused courses covering internet fundamentals, network security, and troubleshooting labs.",
  });

  return <CourseCatalog />;
};
