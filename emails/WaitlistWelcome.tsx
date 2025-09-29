import { Html, Head, Preview, Body, Container, Heading, Text, Button } from '@react-email/components';

type Props = {
  name?: string;
};

export default function WaitlistWelcome({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for joining the Lokaksema 2026 waitlist.</Preview>
      <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', backgroundColor: '#ffffff' }}>
          <Heading>Welcome{ name ? `, ${name}` : ''}!</Heading>
          <Text>
            You are officially on the Lokaksema 2026 waitlist. We will be in touch shortly with schedule
            previews, speaker reveals, and early-bird ticket windows.
          </Text>
          <Button href="https://lokaksema.io" style={{ backgroundColor: '#0e39ff', color: '#ffffff', padding: '12px 20px' }}>
            Explore Lokaksema
          </Button>
        </Container>78
      </Body>
    </Html>
  );
}
