import siteConfig from '@/config/site.config';

export default function WhatsAppLink({ children, ...props }) {
  return (
    <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
