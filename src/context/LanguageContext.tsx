import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      subtitle: 'Excellence in Design',
      title: 'Timeless Luxury Redefined',
      viewProjects: 'View Projects',
      contactUs: 'Contact Us',
      scroll: 'Scroll',
    },
    intro: {
      subtitle: 'Our Philosophy',
      title: 'We Create Spaces That Tell Your Story',
      description: 'At X+O, we believe that interior design is more than just aesthetics; it\'s about creating an environment that resonates with your soul. Our team of visionary designers and master craftsmen work in harmony to deliver bespoke solutions that blend functionality with unparalleled luxury.',
      years: 'Years Experience',
      projects: 'Projects Completed',
      learnMore: 'Learn More About Us',
    },
    portfolio: {
      subtitle: 'Portfolio',
      title: 'Featured Projects',
      viewAll: 'View All Projects',
      explore: 'Explore Project',
    },
    expertise: {
      subtitle: 'Expertise',
      title: 'Our Core Services',
      details: 'Details',
    },
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What Our Clients Say',
      quote: '"Working with X+O was a transformative experience. They didn\'t just design a house; they created a sanctuary that perfectly balances luxury and comfort. Their attention to detail is truly world-class."',
    },
    cta: {
      title: 'Ready to Transform Your Space?',
      description: 'Let\'s collaborate to create something extraordinary. Schedule your private consultation today.',
      button: 'Start Your Project',
    },
    footer: {
      description: 'Crafting timeless spaces that reflect your unique identity. Luxury is in the details, and we obsess over every one.',
      explore: 'Explore',
      contact: 'Contact',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to receive design inspiration and project updates.',
      join: 'Join',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: '© 2026 X+O Interior Design. All rights reserved.',
    },
    contact: {
      subtitle: 'Get In Touch',
      title: 'Let\'s Start Your Journey',
      description: 'Whether you\'re looking to redesign a single room or embark on a full-scale renovation, our team is here to guide you every step of the way.',
      studio: 'Our Studio',
      call: 'Call Us',
      email: 'Email Us',
      map: 'View on Google Maps',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent!',
        successDesc: 'Thank you for reaching out. Our team will contact you within 24 hours.',
        another: 'Send Another Message',
        select: 'Select a service',
      }
    },
    about: {
      subtitle: 'Our Story',
      title: 'A Legacy of Elegance and Innovation',
      p1: 'Founded in 2010, X+O Interior Design began with a simple mission: to elevate the standard of living through thoughtful, bespoke design. Over the past decade, we have evolved from a boutique studio into a globally recognized firm, known for our uncompromising quality and visionary approach.',
      p2: 'Our philosophy is rooted in the belief that every space has a soul. We don\'t just follow trends; we create them. By blending timeless classical principles with cutting-edge modern innovation, we craft environments that are as functional as they are beautiful.',
      countries: 'Countries Reached',
      awards: 'Design Awards',
      vision: 'Our Vision',
      visionDesc: 'To be the world\'s most influential design firm, setting the benchmark for luxury, sustainability, and innovation in every space we touch.',
      mission: 'Our Mission',
      missionDesc: 'To transform our clients\' dreams into tangible realities through meticulous craftsmanship, personalized service, and a passion for excellence.',
      teamSubtitle: 'The Visionaries',
      teamTitle: 'Meet Our Creative Team',
    },
    services: {
      subtitle: 'What We Offer',
      title: 'Comprehensive Design Solutions',
      inquire: 'Inquire Now',
      methodSubtitle: 'Our Method',
      methodTitle: 'The Design Journey',
      steps: [
        { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements.' },
        { step: '02', title: 'Concept', desc: 'Developing the aesthetic and functional blueprint.' },
        { step: '03', title: 'Design', desc: 'Detailed 3D models and material specifications.' },
        { step: '04', title: 'Execution', desc: 'Bringing the design to life with master builders.' }
      ],
      features: ['Personalized Concept', 'Material Selection', '3D Visualization', 'Project Supervision'],
    }
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      projects: 'Dự án',
      services: 'Dịch vụ',
      contact: 'Liên hệ',
      getQuote: 'Báo giá',
    },
    hero: {
      subtitle: 'Sự xuất sắc trong thiết kế',
      title: 'Định nghĩa lại sự sang trọng vượt thời gian',
      viewProjects: 'Xem dự án',
      contactUs: 'Liên hệ ngay',
      scroll: 'Cuộn xuống',
    },
    intro: {
      subtitle: 'Triết lý của chúng tôi',
      title: 'Chúng tôi tạo ra không gian kể câu chuyện của bạn',
      description: 'Tại X+O, chúng tôi tin rằng thiết kế nội thất không chỉ là thẩm mỹ; đó là việc tạo ra một môi trường cộng hưởng với tâm hồn bạn. Đội ngũ thiết kế tầm nhìn và các nghệ nhân bậc thầy của chúng tôi làm việc hài hòa để mang đến các giải pháp riêng biệt kết hợp chức năng với sự sang trọng vô song.',
      years: 'Năm kinh nghiệm',
      projects: 'Dự án hoàn thành',
      learnMore: 'Tìm hiểu thêm về chúng tôi',
    },
    portfolio: {
      subtitle: 'Danh mục đầu tư',
      title: 'Dự án tiêu biểu',
      viewAll: 'Xem tất cả dự án',
      explore: 'Khám phá dự án',
    },
    expertise: {
      subtitle: 'Chuyên môn',
      title: 'Dịch vụ cốt lõi',
      details: 'Chi tiết',
    },
    testimonials: {
      subtitle: 'Đánh giá',
      title: 'Khách hàng nói gì về chúng tôi',
      quote: '"Làm việc với X+O là một trải nghiệm thay đổi hoàn toàn. Họ không chỉ thiết kế một ngôi nhà; họ đã tạo ra một thánh đường cân bằng hoàn hảo giữa sự sang trọng và thoải mái. Sự chú ý đến từng chi tiết của họ thực sự đẳng cấp thế giới."',
    },
    cta: {
      title: 'Sẵn sàng thay đổi không gian của bạn?',
      description: 'Hãy cùng nhau tạo ra điều gì đó phi thường. Đặt lịch tư vấn riêng của bạn ngay hôm nay.',
      button: 'Bắt đầu dự án',
    },
    footer: {
      description: 'Kiến tạo những không gian vượt thời gian phản ánh bản sắc riêng biệt của bạn. Sự sang trọng nằm ở các chi tiết, và chúng tôi bị ám ảnh bởi từng chi tiết đó.',
      explore: 'Khám phá',
      contact: 'Liên hệ',
      newsletter: 'Bản tin',
      newsletterDesc: 'Đăng ký để nhận cảm hứng thiết kế và cập nhật dự án.',
      join: 'Tham gia',
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản dịch vụ',
      rights: '© 2026 X+O Interior Design. Bảo lưu mọi quyền.',
    },
    contact: {
      subtitle: 'Liên hệ',
      title: 'Bắt đầu hành trình của bạn',
      description: 'Cho dù bạn đang muốn thiết kế lại một căn phòng hay bắt đầu một cuộc cải tạo quy mô lớn, đội ngũ của chúng tôi luôn sẵn sàng hướng dẫn bạn từng bước.',
      studio: 'Studio của chúng tôi',
      call: 'Gọi cho chúng tôi',
      email: 'Gửi email',
      map: 'Xem trên Google Maps',
      form: {
        name: 'Họ và tên',
        email: 'Địa chỉ email',
        phone: 'Số điện thoại',
        subject: 'Chủ đề',
        message: 'Tin nhắn của bạn',
        send: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        success: 'Đã gửi tin nhắn!',
        successDesc: 'Cảm ơn bạn đã liên hệ. Đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ.',
        another: 'Gửi tin nhắn khác',
        select: 'Chọn một dịch vụ',
      }
    },
    about: {
      subtitle: 'Câu chuyện của chúng tôi',
      title: 'Di sản của sự sang trọng và đổi mới',
      p1: 'Được thành lập vào năm 2010, X+O Interior Design bắt đầu với một sứ mệnh đơn giản: nâng cao tiêu chuẩn sống thông qua thiết kế chu đáo, riêng biệt. Trong thập kỷ qua, chúng tôi đã phát triển từ một studio nhỏ thành một công ty được công nhận toàn cầu, nổi tiếng với chất lượng không khoan nhượng và cách tiếp cận tầm nhìn.',
      p2: 'Triết lý của chúng tôi bắt nguồn từ niềm tin rằng mọi không gian đều có tâm hồn. Chúng tôi không chỉ chạy theo xu hướng; chúng tôi tạo ra chúng. Bằng cách kết hợp các nguyên tắc cổ điển vượt thời gian với sự đổi mới hiện đại tiên tiến, chúng tôi tạo ra các môi trường vừa có chức năng vừa đẹp mắt.',
      countries: 'Quốc gia tiếp cận',
      awards: 'Giải thưởng thiết kế',
      vision: 'Tầm nhìn',
      visionDesc: 'Trở thành công ty thiết kế có ảnh hưởng nhất thế giới, thiết lập tiêu chuẩn cho sự sang trọng, bền vững và đổi mới trong mọi không gian chúng tôi chạm tới.',
      mission: 'Sứ mệnh',
      missionDesc: 'Biến ước mơ của khách hàng thành hiện thực hữu hình thông qua sự khéo léo tỉ mỉ, dịch vụ cá nhân hóa và niềm đam mê xuất sắc.',
      teamSubtitle: 'Những người có tầm nhìn',
      teamTitle: 'Gặp gỡ đội ngũ sáng tạo của chúng tôi',
    },
    services: {
      subtitle: 'Chúng tôi cung cấp gì',
      title: 'Giải pháp thiết kế toàn diện',
      inquire: 'Yêu cầu ngay',
      methodSubtitle: 'Phương pháp của chúng tôi',
      methodTitle: 'Hành trình thiết kế',
      steps: [
        { step: '01', title: 'Tư vấn', desc: 'Hiểu tầm nhìn và yêu cầu của bạn.' },
        { step: '02', title: 'Khái niệm', desc: 'Phát triển bản thiết kế thẩm mỹ và chức năng.' },
        { step: '03', title: 'Thiết kế', desc: 'Mô hình 3D chi tiết và thông số kỹ thuật vật liệu.' },
        { step: '04', title: 'Thi công', desc: 'Hiện thực hóa thiết kế với các thợ xây bậc thầy.' }
      ],
      features: ['Khái niệm cá nhân hóa', 'Lựa chọn vật liệu', 'Hình ảnh hóa 3D', 'Giám sát dự án'],
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
