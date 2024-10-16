import { tv } from "tailwind-variants";

export const button = tv({
    base: [
        "inline-flex items-center justify-center border border-transparent rounded-xl",
        "cursor-pointer"
    ],
    variants: {
        variant: {
            "primary-outline": [
                "bg-transparent border-primary hover:bg-primary/10"
            ]
        },
        size: {
            md: "h-10 min-w-10 gap-x-2 px-4"
        }
    },
    defaultVariants: {
        variant: "primary-outline",
        size: "md"
    }
})