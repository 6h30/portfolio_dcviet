import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "dcviet",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Lập trình viên",
  avatar: "/images/avatar.png",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English B1", "VN L1"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Đăng kí nhận bản tin từ {person.firstName}</>,
  description: (
    <>
      Thỉnh thoảng tôi viết về thiết kế, công nghệ và chia sẻ suy nghĩ về mối quan hệ giữa sáng tạo và kỹ thuật.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dcviet",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/viettran/",
  // },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/dcviet",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:tranducviet.eng@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack developer</>,
  subline: (
    <>
      Tui là 1 <InlineCode>lập trình viên</InlineCode> làm việc tự do.
    </>
  ),
};

const about = {
  label: "dcviet",
  title: "Về tôi",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Giới thiệu",
    description: (
      <>
        Tôi có niềm đam mê biến những thách thức phức tạp thành các giải pháp thiết kế đơn giản, thanh lịch. Công việc của tôi bao gồm: thiết kế giao diện, trải nghiệm tương tác và tìm kiếm sự giao thoa giữa thiết kế và công nghệ.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Kinh nghiệm làm việc",
    experiences: [
      {
        company: "duc& Agency",
        timeframe: "2022 - Present",
        role: "Freelance Developer",
        achievements: [
          <>
            Thiết kế lại UI/UX cho trang web, giúp tăng 20% ​​mức độ tương tác của người dùng và thời gian tải nhanh hơn 30%.
          </>,
          <>
            Tiên phong trong việc tích hợp các công cụ AI vào quy trình thiết kế, cho phép các bạn thiết kế lặp lại nhanh hơn 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01e.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01f.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01g.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01d.gif",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },         
        ],
      },
      {
        company: "www.omdstudio.art",
        timeframe: "11/2024 - 1/2025",
        role: "Designer and Developer",
        achievements: [
          <>
            Tối ưu hóa các thành phần, xử lý dữ liệu nền tảng nextjs, cải thiện seo lên 40%.
          </>,
          <>
            Dẫn dắt một nhóm chức năng chéo (kiến trúc sư, đối tác thi công, thiết kế sản phẩm) để ra mắt dòng sản phẩm mới, góp phần tăng 15% tổng doanh thu của công ty.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01b.gif",
            alt: "Omd Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-01c.gif",
            alt: "Omd Project",
            width: 9,
            height: 16,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Học vấn",
    institutions: [
      {
        name: "Đại học Khoa Học Tự Nhiên TpHCM",
        description: <>Ngành Công Nghệ Thông Tin.</>,
      },
      {
        name: "Định hướng phát triển",
        description: <>Nghiên cứu nền tảng học trực tuyến và phát triển thương hiệu cá nhân.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Kỹ năng kỹ thuật",
    skills: [
      {
        title: "Triển khai UI",
        description: <>Chuyển đổi các thiết kế Figma thành giao diện người dùng có độ phản hồi cao, độ trung thực cao bằng React, Next.js, Vue hoặc Angular, cung cấp các giải pháp front-end được tối ưu hóa và có thể mở rộng.
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02b.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-02c.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Quy trình làm việc từ thiết kế đến mã",
        description: <>Có kinh nghiệm trong việc hợp lý hóa sự hợp tác giữa các nhóm thiết kế và phát triển, đảm bảo tích hợp liền mạch các thiết kế UI với các cơ sở mã có thể bảo trì.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04d.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Các công cụ bổ sung",
        description: <>Quen thuộc với quản lý trạng thái (Redux, Vuex), tích hợp API (REST, GraphQL) và các kỹ thuật tối ưu hóa hiệu suất cho các ứng dụng web hiện đại.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04a.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Viết về thiết kế và công nghệ...",
  description: `Đọc những gì ${person.name} đã viết gần đây`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Dự án",
  title: "Dự án đã thực hiện",
  description: `Designed and developed by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Ảnh dự án",
  title: "Bộ sưu tập ảnh công việc",
  description: `Một bộ sưu tập ảnh của ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
