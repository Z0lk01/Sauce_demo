# Cypress E2E Tests for SauceDemo

## Popis
Tento projekt obsahuje automatizované testy pomocou Cypressu pre demo web aplikáciu [SauceDemo](https://www.saucedemo.com).

## Inštalácia
```bash
git clone https://github.com/tvojprofil/cypress-saucedemo-tests.git
cd cypress-saucedemo-tests
npm install
```

## Spustenie testov
```bash
npx cypress open   # GUI mód
npx cypress run    # headless mód
```

## Použité technológie
- Cypress
- GitHub Actions (CI)

## CI/CD
Po každom pushnutí do repozitára sa automaticky spustia testy pomocou GitHub Actions.
