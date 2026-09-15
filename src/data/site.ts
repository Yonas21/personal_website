export const SITE_URL = 'https://yonasalem.vercel.app';
export const SITE_NAME = 'Yonas Alem';
export const SITE_TITLE = 'Yonas Alem | Senior Software Engineer';
export const SITE_DESCRIPTION =
  'Official website of Yonas Alem, senior software engineer in Addis Ababa, Ethiopia. Backend and full stack systems across payments, gaming, ecommerce, advertising, and AWS. Open to remote roles.';
export const PERSON_JOB_TITLE = 'Senior Software Engineer';
export const PERSON_IMAGE_PATH = '/yonas-alem.jpg';
export const PERSON_EMAIL = 'yonalem21@gmail.com';
export const PERSON_PHONE = '+251936972697';
export const PERSON_LOCATION = 'Addis Ababa, Ethiopia';
export const PERSON_SAME_AS = [
  'https://github.com/Yonas21',
  'https://www.linkedin.com/in/yonasalem21/',
  'https://www.instagram.com/its_yon_21/',
] as const;

export const toAbsoluteUrl = (path = '/'): string => {
  const normalized = path.split('#')[0].split('?')[0];
  if (!normalized || normalized === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
};
