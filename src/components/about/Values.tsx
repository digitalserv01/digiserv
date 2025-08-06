'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Lightbulb, ShieldCheck } from "lucide-react";


const values = [
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: 'Partenariat',
      description: 'Votre succès est notre succès. Nous travaillons à vos côtés, en totale transparence, comme une extension de votre équipe.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: 'Innovation',
      description: "Nous sommes passionnés par la technologie et l'IA. Nous veillons constamment pour vous proposer les solutions les plus performantes et créatives.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'Intégrité',
      description: 'La confiance est le fondement de toute collaboration. Nous nous engageons à une éthique de travail irréprochable et à des conseils honnêtes.',
    },
  ];

const Values = () => {
    return (
        <div className="bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-headline text-primary">Nos Valeurs Fondamentales</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ce qui nous guide au quotidien dans chaque projet que nous entreprenons.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <Card key={value.title} className="text-center">
                    <CardContent className="pt-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                      <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </div>
    )
}

export default Values;
