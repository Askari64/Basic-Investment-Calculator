import investLogo from '../assets/investment-calculator-logo.png'

function Header() {
  return (
    <header id='header' >
        <img src={investLogo} alt='App Logo'/>
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header