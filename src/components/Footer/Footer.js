import "./Footer.css"
import {Button} from "../Button/Button"

export const Footer = () => `
<div>
${Button("/icons/github.png", "GitHub", "https://github.com/Cvidal84")}
${Button("/icons/in.jpg", "LinkedIn", "https://www.linkedin.com/in/carlos-vidal-puigcerver ")}
${Button("/icons/telegram.png", "Telegram", "https://www.t.me/Carlosvidal")}
${Button("/icons/instagram.png", "Instagram", "https://www.instagram.com/carlosvidalpuigcerver/")}
${Button("/icons/email.png", "Email", "mailto:carlosvidalpuigcerver@gmail.com?subject=Contacto%20desde%20el%20proyecto4")}
</div>
<p>© 2025 Created by Carlos Vidal Puigcerver</p>
`

