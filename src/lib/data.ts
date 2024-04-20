import image1 from "public/assets/portfolio.png"
import image2 from "public/assets/bloodstain.png"

export const projectsData = [
    {
        title: "project one",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["one", "two", "three", "four", "five", "six", "seven"],
        imageUrl: image1
    },
    {
        title: "project two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["one", "two", "three", "four", "five", "six", "seven"],
        imageUrl: image2
    }
] as const