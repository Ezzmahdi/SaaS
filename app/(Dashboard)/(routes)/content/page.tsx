"use client";

import { Card } from "@/components/ui/card";

import { ArrowRight, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Write Content",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/write"
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/write"
    }
]

const ContentPage = () => {
    const router = useRouter()

    return (
      <div>
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center ">Explore The Power of AI</h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                Create Content with the smartest AI - Explore the power of AI
            </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) => (
                <Card onClick={() => router.push('tool.href')} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                            <tool.icon className={cn("w-8 h-8", tool.color)}/>
                        </div>
                        <div className="font-semibold">
                            {tool.label}
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </Card>
            ))}
        </div>
      </div>  
    )
}

export default ContentPage;