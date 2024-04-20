import image1 from "public/assets/portfolio.png"
import image2 from "public/assets/bloodstain.png"
import image3 from "public/assets/wander.png"

export const projectsData = [
    {
        title: "Portfolio Website",
        description: "The website you are on right now! I made this website to learn Next.js and Tailwind CSS. I also use this website to try things that I think are cool.",
        tags: ["Next.js", "Tailwind", "TypeScript", "React"],
        imageUrl: image1
    },
    {
        title: "Automated Bloodstain Segmentation",
        description: "Industrial project in conjunction with ESR. It takes one or more images of bloodstains and determines what type of bloodstain they are using convolutional neural network.",
        tags: ["AI", "Computer Vision", "Deep Learning", "Python"],
        imageUrl: image2
    },
    {
        title: "Wander",
        description: "Whole year project with 7 other students. Wander is a service where users can organise and participate in fitness events. These activities can also have metadata such as location.",
        tags: ["Vue", "Java", "Gherkin", "JavaScript", "SQL", "API"],
        imageUrl: image3
    }
] as const