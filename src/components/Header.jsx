import { useTheme } from '../context/ThemeContext'
import { GitHubIcon, YouTubeIcon, LinkedInIcon, InstagramIcon, SunIcon, MoonIcon } from './Icons'
import './Header.css'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jackhobday',
      Icon: GitHubIcon
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@johnfrancishobday',
      Icon: YouTubeIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jack-hobday/',
      Icon: LinkedInIcon
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hobdayy/',
      Icon: InstagramIcon
    }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-name">john francis (jack) hobday</div>
        <div className="nav-right">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label={link.name}
            >
              <link.Icon className="nav-icon" />
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="theme-icon" />
            ) : (
              <MoonIcon className="theme-icon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

