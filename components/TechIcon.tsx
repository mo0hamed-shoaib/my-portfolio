'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 24, className = '' }) => {
  const iconMap: { [key: string]: string } = {
    // Frontend
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    
    // Backend
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    'Ruby': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
    'Rails': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'Spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    
    // Tools & Technologies
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
    'Heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg',
    'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    'WebStorm': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg',
    'Vim': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'Ubuntu': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg',
    'Windows': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
    'macOS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    
    // Testing & Build Tools
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
    'Cypress': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
    'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
    'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    'Babel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg',
    'ESLint': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
    'Prettier': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prettier/prettier-original.svg',
    
    // Data & Analytics
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    'Elasticsearch': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg',
    'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
    
    // Mobile
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
    
    // Libraries & Frameworks - Fixed problematic icons
    'Chart.js': 'https://www.chartjs.org/img/chartjs-logo.svg',
    'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg',
    'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    'Stripe': 'https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg',
    'PayPal': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/paypal/paypal-original.svg',
    'JWT': 'https://jwt.io/img/pic_logo.svg',
    'OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg',
    
    // CMS & Headless
    'Sanity': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg',
    'Contentful': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/contentful/contentful-original.svg',
    'Strapi': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/strapi/strapi-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg',
    
    // Monitoring & Analytics
    'Sentry': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg',
    'Google Analytics': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googleanalytics/googleanalytics-original.svg',
    'Mixpanel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mixpanel/mixpanel-original.svg',
  };

  // Custom SVG fallbacks for problematic icons
  const customSVGs: { [key: string]: string } = {
    'Chart.js': `
      <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="96" cy="96" r="88" stroke="#36A2EB" stroke-width="16"/>
        <circle cx="96" cy="96" r="40" fill="#36A2EB"/>
        <path d="M96 8 L96 56 L144 96 L96 136 L48 96 L96 56" fill="#FF6384" stroke="#FF6384" stroke-width="2"/>
      </svg>
    `,
    'Stripe': `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    `,
    'JWT': `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <path d="M10.2 0L9 5.5 14.5 4 13.3 9.5 19 8.5 17.5 14 23 13.5 21.8 19 16.3 19.5 17.5 24 12 23.5 13.2 18 7.7 18.5 8.9 13 3.4 13.5 4.6 8 0 8.5 1.2 3 6.7 2.5 5.5 0 10.2 0Z"/>
      </svg>
    `
  };

  const iconUrl = iconMap[name];

  // Handle error state with better fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    
    if (parent && customSVGs[name]) {
      // Replace with custom SVG
      parent.innerHTML = customSVGs[name];
      const svg = parent.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', size.toString());
        svg.setAttribute('height', size.toString());
        svg.classList.add(className);
      }
    } else {
      // Fallback to text
      target.style.display = 'none';
      if (parent) {
        parent.innerHTML = `
          <div class="flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded text-white font-bold text-xs" 
               style="width: ${size}px; height: ${size}px; min-width: ${size}px;">
            ${name.charAt(0).toUpperCase()}
          </div>
        `;
      }
    }
  };

  if (!iconUrl) {
    // Fallback for unmapped technologies
    return (
      <div 
        className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded text-white font-bold ${className}`}
        style={{ width: size, height: size, fontSize: `${size * 0.4}px` }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        width={size}
        height={size}
        className={`object-contain ${className}`}
        style={{ 
          filter: name === 'Next.js' || name === 'Express.js' || name === 'GitHub' ? 'invert(1)' : 'none'
        }}
        onError={handleImageError}
      />
    </div>
  );
};

export default TechIcon;