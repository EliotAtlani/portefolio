import CardProject from "@/components/ui/card-project";
import { Label } from "@/components/ui/label";
import LinkSocialNetwork from "@/components/ui/link-social-network";
import { projects } from "@/data/projects";
import { socialNetworks } from "@/data/socialNetworks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-1/2 mx-auto">
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <Label className="text-4xl font-bold">
            Hello, I&apos;m Eliot Atlani 🙋‍♂️
          </Label>
          <Label className="text-xl font-light text-muted-foreground">
            A student and software engineer.
          </Label>
          <div className="flex gap-4">
            {socialNetworks.map((socialNetwork, index) => (
              <LinkSocialNetwork key={index} socialNetwork={socialNetwork} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center h-screen">
        <Label className="text-2xl font-bold">
          {" "}
          Here&apos;s my latest projects
        </Label>
        <Label className="font-light text-muted-foreground my-4">
          {" "}
          Explore my latest projects, showcasing my skills in software
          development and engineering.
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
