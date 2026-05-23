"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Heart, Moon, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Journey", id: "about" },
        { name: "Connection", id: "contact" },
      ]}
      brandName="Ethereal Heart"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Ethereal Heart"
      description="Enter the shadows. Experience the connection."
      buttons={[
        {
          text: "Start 🖤",          href: "#about"},
      ]}
      buttonAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-photo-sea-waves_58702-16356.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Do you like cats? 🐈"
      description="Perhaps they know the secrets of the dark night better than we do."
      metrics={[
        {
          value: "100%",          title: "Mysterious"},
        {
          value: "∞",          title: "Romance"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/vertical-shot-black-cat-dark-darkness_181624-14203.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="bento-grid"
      animationType="slide-up"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "Deep",          title: "Midnight Blue",          description: "Calm and vast",          icon: Moon,
        },
        {
          id: "m2",          value: "Vibrant",          title: "Neon Violet",          description: "Electric and alive",          icon: Zap,
        },
        {
          id: "m3",          value: "Soft",          title: "Crimson Rose",          description: "Passionate and deep",          icon: Heart,
        },
      ]}
      title="Soul Reflection"
      description="What colors do you dream in?"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Night Conversations",          description: "The best secrets are told after midnight.",          imageSrc: "http://img.b2bpic.net/free-photo/azure-paint-flowing-dark-water_23-2147798209.jpg"},
        {
          title: "Soft Refuge",          description: "A place where silence is never lonely.",          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-couple-date-night_23-2149131762.jpg"},
        {
          title: "Ethereal Bonds",          description: "Connecting beyond the physical veil.",          imageSrc: "http://img.b2bpic.net/free-photo/blue-lights-motion_23-2147785847.jpg"},
      ]}
      title="Comfort & Secrets"
      description="Moments of safety in the endless dark."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="This experience feels like stepping into a romantic dark dream."
      rating={5}
      author="Luna S."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-city-double-exposure_23-2149303238.jpg",          alt: "A"},
        {
          src: "http://img.b2bpic.net/free-photo/charming-fashion-female-model-coat_1153-7921.jpg",          alt: "B"},
        {
          src: "http://img.b2bpic.net/free-photo/sorceresses-holding-white-candle_1153-471.jpg",          alt: "C"},
        {
          src: "http://img.b2bpic.net/free-photo/neon-portrait-man-wearing-glasses_158595-7929.jpg",          alt: "D"},
        {
          src: "http://img.b2bpic.net/free-photo/dark-wizard-s-hands-are-controlling-magic-globe-showing-illuminating-effects_613910-17016.jpg",          alt: "E"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "Is silence better?",          content: "Silence allows the soul to speak."},
        {
          id: "f2",          title: "Are you afraid of the dark?",          content: "Darkness is only light unseen."},
        {
          id: "f3",          title: "Will you stay?",          content: "I am here."},
      ]}
      title="Lingering Questions"
      description="Curiosity is the beginning of intimacy."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/full-moon-night-sky_53876-139859.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      textboxLayout="default"
      animationType="slide-up"
      useInvertedBackground={false}
      title="The Nocturnal Journal"
      description="Reflections from the deep."
      blogs={[
        {
          id: "b1",          category: "Poetry",          title: "Shadows of Love",          excerpt: "Walking in the indigo night...",          imageSrc: "http://img.b2bpic.net/free-photo/bearded-guy-sunglasses-hood-is-posing-photographer-blue-light_613910-5971.jpg",          authorName: "Ethereal",          authorAvatar: "http://img.b2bpic.net/free-photo/attractive-girl-is-playing-role-creepy-dead-doll-misty-smoke_613910-13082.jpg",          date: "Oct 12"},
        {
          id: "b2",          category: "Thoughts",          title: "Midnight Vows",          excerpt: "The stars keep our secrets...",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-shooting-with-projector_23-2149424929.jpg",          authorName: "Ethereal",          authorAvatar: "http://img.b2bpic.net/free-photo/young-woman-standing-universe-texture-projection_23-2149512080.jpg",          date: "Oct 14"},
        {
          id: "b3",          category: "Art",          title: "Neon Dreams",          excerpt: "Visualizing the hidden heart...",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-portrait-teenager-woman_23-2149453475.jpg",          authorName: "Ethereal",          authorAvatar: "http://img.b2bpic.net/free-photo/abstract-portrait-man-vaporwave-style_23-2148950743.jpg",          date: "Oct 16"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      title="I love you, cutie 🖤"
      description="Join our midnight assembly."
      mediaPosition="right"
      tag="Stay"
      imageSrc="http://img.b2bpic.net/free-photo/person-cat-mask-dark-room_23-2147694963.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/dramatic-spotlight-dark-smoky-room_84443-72408.jpg"
      logoText="Ethereal Heart"
      columns={[
        {
          title: "About",          items: [
            {
              label: "Origin",              href: "#"},
            {
              label: "Purpose",              href: "#"},
          ],
        },
        {
          title: "Socials",          items: [
            {
              label: "Discord",              href: "#"},
            {
              label: "TikTok",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
