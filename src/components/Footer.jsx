export default function Footer() {
      const author = {
    name: "Majedul",
    href: "https://github.com/majedul-uxbd",
  }
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* <a href="#!">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a> */}

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:majedulb@gmail.com">majedulb@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p> {new Date().getFullYear()} • All rights reserved &nbsp;
                <a
                    className="text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4"
                    href={author.href}
                    target="_blank"
                >
                    {author.name}
                </a>
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/majedul-uxbd" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/majedulb/">LinkedIn</a></li>
                    {/* <li><a href="#!">Twitter</a></li> */}
                </ul>
            </div>
        </div>
    )
}