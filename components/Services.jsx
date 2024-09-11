import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "We design and develop beautiful and responsive websites that are tailored to your needs.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "We develop custom web applications that are scalable and easy to maintain.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "SEO",
    description:
      "We help you improve your website's ranking on search engines to attract more visitors.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My services
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-300px flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>

                <CardContent>
                  {item.title && (
                    <CardTitle className="text-xl font-bold text-center">
                      {item.title}
                    </CardTitle>
                  )}
                  {item.description && (
                    <CardDescription className="text-center">
                      {item.description}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
