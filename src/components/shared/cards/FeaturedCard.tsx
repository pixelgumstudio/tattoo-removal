import React from "react";
import { Paragraph, Title } from "../../ui/typography";

interface FeatureCardProps {
  icon: string; // emoji or icon
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center max-w-xs mx-auto">
      <div className="text-3xl mb-3">{icon}</div>
      <Title align="center">{title}</Title>
      <Paragraph align="center" variant="muted" size="base">
        {description}
      </Paragraph>
    </div>
  );
};

export default FeatureCard;
