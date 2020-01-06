const modal = document.querySelector('.modal')

const backdrop = document.querySelector('.backdrop')

const submitButtons = document.querySelectorAll('.plan button')
const modalCancelBtn = document.querySelector('button.modal__action')
const toggleButton = document.querySelector('.toggle-button')

const mobileNav = document.querySelector('.mobile-nav')

const svgInst = document.querySelector('.main-footer__insta-logo')
const svgVk = document.querySelector('.main-footer__vk-logo')
const svgTelegram = document.querySelector('.main-footer__telegram-logo')

const svgInstHover = document.querySelector('#main-footer__insta-logo--hover')
const svgVkHover = document.querySelector('#main-footer__vk-logo--hover')
const svgTelegramHover = document.querySelector(
  '#main-footer__telegram-logo--hover'
)

let footerLinks = document.querySelectorAll('.main-footer__link a')
const instLink = footerLinks[0]
const vkLink = footerLinks[1]
const telegramLink = footerLinks[2]
footerLinks = [
  { name: 'insta', link: instLink },
  { name: 'vk', link: vkLink },
  { name: 'telegram', link: telegramLink }
]
mobileNav.style.display = 'none'

const makeModalAppear = () => {
  backdrop.style.display = 'block'
  modal.style.display = 'block'
}

const makeModalDisappear = () => {
  backdrop.style.display = 'none'
  modal.style.display = 'none'
}

const onMouseOver = link => {
  if (link.name === 'insta') {
    svgInst.style.display = 'none'
    svgInstHover.style.display = 'inline-block'
  } else if (link.name === 'vk') {
    svgVk.style.display = 'none'
    svgVkHover.style.display = 'inline-block'
  } else if (link.name === 'telegram') {
    svgTelegram.style.display = 'none'
    svgTelegramHover.style.display = 'inline-block'
  }
}

const onMouseOut = link => {
  if (link.name === 'insta') {
    svgInst.style.display = 'inline-block'
    svgInstHover.style.display = 'none'
  } else if (link.name === 'vk') {
    svgVk.style.display = 'inline-block'
    svgVkHover.style.display = 'none'
  } else if (link.name === 'telegram') {
    svgTelegram.style.display = 'inline-block'
    svgTelegramHover.style.display = 'none'
  }
}

footerLinks.forEach(link => {
  link.link.addEventListener('mouseover', () => onMouseOver(link))
  link.link.addEventListener('mouseout', () => onMouseOut(link))
})

toggleButton.addEventListener('click', () => {
  mobileNav.style.display =
    mobileNav.style.display === 'none' ? 'block' : 'none'
  backdrop.style.display = 'block'
})

if (modal !== null) {
  submitButtons.forEach(btn => btn.addEventListener('click', makeModalAppear))
  modalCancelBtn.addEventListener('click', makeModalDisappear)
}
backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none'
  backdrop.style.display = 'none'
})
