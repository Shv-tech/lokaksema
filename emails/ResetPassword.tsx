import { Html, Head, Preview, Body, Container, Heading, Text, Button } from '@react-email/components';

type Props = {
  resetUrl: string;
};

export default function ResetPassword({ resetUrl }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Reset your Lokaksema account password.</Preview>
      <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', backgroundColor: '#ffffff' }}>
          <Heading>Password reset</Heading>
          <Text>We received a request to reset your Lokaksema account password.</Text>
          <Button href={resetUrl} style={{ backgroundColor: '#0e39ff', color: '#ffffff', padding: '12px 20px' }}>
            Set a new password
          </Button>
          <Text>If you did not request this change, you can safely ignore this email.</Text>
        </Container>
      </Body>
    </Html>
  );
}
