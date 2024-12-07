"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ModeToggle"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    description: "Tailored software solutions to meet your unique business needs.",
  },
  {
    title: "Web & Mobile App Development",
    href: "/services/web-mobile-app-development",
    description: "Create powerful web and mobile applications for your business.",
  },
  {
    title: "SaaS Development",
    href: "/services/saas-development",
    description: "Build scalable and efficient Software-as-a-Service solutions.",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description: "Leverage the power of cloud computing for your business.",
  },
  {
    title: "AI/ML Integration",
    href: "/services/ai-ml-integration",
    description: "Integrate cutting-edge AI and machine learning into your products.",
  },
  {
    title: "DevOps and Maintenance",
    href: "/services/devops-and-maintenance",
    description: "Streamline your development process and maintain your software efficiently.",
  },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Pera Infotech Logo" width={40} height={40} />
          <span className="font-bold text-xl">Pera Infotech</span>
        </Link>
        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          About Pera Infotech
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn about our mission, values, and the team behind our innovative solutions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about/who-we-are" title="Who We Are">
                    Our story and what drives us.
                  </ListItem>
                  <ListItem href="/about/team" title="Meet the Team">
                    The brilliant minds behind our success.
                  </ListItem>
                  <ListItem href="/about/milestones" title="Milestones">
                    Key achievements in our journey.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/careers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Careers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/tech-stack" title="Tech Stack">
                    Explore our cutting-edge technologies.
                  </ListItem>
                  <ListItem href="/faq" title="FAQ">
                    Find answers to common questions.
                  </ListItem>
                  <ListItem href="/resources" title="Downloads">
                    Access whitepapers, eBooks, and templates.
                  </ListItem>
                  <ListItem href="/pricing-calculator" title="Pricing Calculator">
                    Estimate the cost of your project.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <Button asChild>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

