import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const WritePage = () => {
    return (
        <div>
            <Heading 
            title="Write" 
            description="Get Eyes on your contnet with our model" 
            icon={MessageSquare} 
            iconColor="text-violet-500" 
            bgColor="bg-violet-500/10"
            />

            <div className="px-4 lg:px-8">

            </div>

        </div>
    )
}

export default WritePage;