'use client';
import AnimatedSection from "./AnimatedSection";

const HeroAbout = () => {
    return (
        <div className="bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <AnimatedSection>
                    <div className="text-center">
                        <p className="text-base font-semibold text-accent tracking-wide uppercase">Notre histoire</p>
                        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary !leading-tight text-balance">
                            Votre partenaire de croissance digitale
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Nous combinons expertise technique, créativité et intelligence artificielle pour transformer les défis des entrepreneurs français en opportunités de succès.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default HeroAbout;
