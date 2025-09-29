import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

type Props = {
  company: string;
};

export default function SponsorThanks({ company }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for supporting Lokaksema 2026.</Preview>
      <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', backgroundColor: '#ffffff' }}>
          <Heading>Thank you, {company}</Heading>
          <Text>
            We are excited to partner with you for Lokaksema 2026. Our partnerships team will reach out with
            next steps, asset specifications, and activation opportunities.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
