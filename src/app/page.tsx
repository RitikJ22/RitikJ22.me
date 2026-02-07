'use client'

import { LinkButton } from '@/components/ui/link-button'
import { PageTransition } from '@/components/ui/page-transition'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import personalInfo from '@/data/personal-info.json'
import socialLinks from '@/data/social-links.json'
import Image from 'next/image'

const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    FiMail: FiMail,
    FaLinkedin,
    FaGithub,
    FaXTwitter
}

function parseTextWithLinks(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = []
    let currentIndex = 0
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    let match
    
    while ((match = linkRegex.exec(text)) !== null) {
        const [fullMatch, linkText, url] = match
        const startIndex = match.index
        
        if (startIndex > currentIndex) {
            parts.push(text.slice(currentIndex, startIndex))
        }
        
        parts.push(
            <LinkButton 
                key={startIndex}
                href={url}
                target={url.startsWith('http') ? "_blank" : undefined}
            >
                {linkText}
            </LinkButton>
        )
        
        currentIndex = startIndex + fullMatch.length
    }
    
    if (currentIndex < text.length) {
        parts.push(text.slice(currentIndex))
    }
    
    return parts.map((part, index) => <span key={index}>{part}</span>)
}

export default function Home() {
    const heroSocialLinks = socialLinks.filter(link => link.published)

    return (
        <PageTransition>
            <div className="container max-w-2xl py-12 md:py-20 mx-auto">
                {/* Hero */}
                <section className="space-y-6 mb-16">
                    <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                {personalInfo.hero_title}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                {parseTextWithLinks(personalInfo.hero_description)}
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-xl w-24 h-24 md:w-28 md:h-28 shadow-lg border border-border flex-shrink-0">
                            <Image
                                src="/Anime%20Hypio%20Kids.webp"
                                height={112}
                                width={112}
                                alt="Ritik Jaiswal"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                        {heroSocialLinks.map((link) => {
                            const IconComponent = IconMap[link.icon as keyof typeof IconMap]
                            return (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target={link.url.startsWith('http') ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-200"
                                >
                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                    <span className="hidden sm:inline">{link.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </section>

                {/* About */}
                <section className="space-y-6 mb-16">
                    <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>{parseTextWithLinks(personalInfo.about_me_paragraph_1)}</p>
                        <p>{parseTextWithLinks(personalInfo.about_me_paragraph_2)}</p>
                    </div>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                    <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {parseTextWithLinks(personalInfo.contact_description)}
                    </p>
                </section>
            </div>
        </PageTransition>
    )
}
