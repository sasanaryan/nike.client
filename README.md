<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/sasanaryan/nike.client">
    <img src="public/assets/icon/png03.png" alt="Logo" width="120">
  </a>

  <h1 align="center">Nike Shop</h1>
  
  Nike Shop is an e-commerce web app built with React.js and hosted on Netlify. This website imitates a real-world market where visitors can view products under different categories, select product for favoraite collection, serach products, add products to cart, confirm order, and see ordered products in profile page. 
  <br />
  
  ### <a href="https://sasan-nikeshop.netlify.app//">View Live</a> :large_blue_diamond: <a href="https://github.com/sasanaryan/nike.client/issues">Report Bug</a>
  <br />
</div>

## :bookmark_tabs: Table of Contents

  <ol>
    <li>
      <a href="#1-about">About</a>
    </li>
    <li>
      <a href="#2-tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#3-getting-started">Getting Started</a>
      <ul>
        <li><a href="#32-installation">3.2 Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#4-Folder-Structure">Folder Structure</a>
    </li>
    <li><a href="#5-features">Features</a></li>
  </ol>

<br />

## 1. About

![Nike Shop Screen Shot](public/assets/image/homepage.jpg)

Nike shop is an fully resposive e-commerce web app built with `React.js` and hosted on `Netlify`. This website imitates a real-world market. guest users just can view products, serach products, and add products to cart. signed-in users also can confirm order, select products for favoraite collection and see ordered with favorites products in profile page.

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

## 2. Tech Stack

[![Package - react](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/react?style=for-the-badge&logo=react&logoColor=%2361dafb&color=%23000)](https://www.npmjs.com/package/react)
[![Package - react-router-dom](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/react-router-dom?style=for-the-badge&logo=react-router&logoColor=%23fff&color=%23F44250)](https://www.npmjs.com/package/react-router-dom)
![Styled Components](https://img.shields.io/badge/styled--components-%5E5.3.5-%23DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%5E4.2.0-%23593d88?style=for-the-badge&logo=redux&logoColor=white)
![React-Redux](https://img.shields.io/badge/react--redux-%5E8.0.2-%23764abc?style=for-the-badge&logo=redux&logoColor=white)
![Redux-Persist](https://img.shields.io/badge/redux--persist-%5E6.0.0-%23764abc?style=for-the-badge&logo=redux&logoColor=white)

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

## 3. Getting Started

Getting started with Fashionista is fairly easy and simple. Follow the instructions as stated below -

### 3.1 Prerequisites

- You need to have `Node.js` installed on your computer beforehand to run this project. Follow [this link](https://nodejs.org/en/download/) to install `Node.js` on your computer.

### 3.2 Installation

To test `Stripe` payment and simulate the credit-card transaction, skip step 3.

1. Clone the repo

   ```sh
   git clone https://github.com/sasanaryan/nike.client.git
   ```

2. Install `npm` packages

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>
 
## 4. Folder Structure

```text

. (Root)
├── public
├── src
│   ├── components (folder)
│   ├── context (folder)
│   ├── data (folder)
│   ├── feature (folder)
│   ├── pages (folder)
│   ├── route (folder)
│   ├── services (folder)
│   ├── store (folder)
│   ├── theme (folder)
│   ├── type (folder)
│   ├── App.tsx
│   ├── config.ts
│   └── index.tsx
│
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.json


```

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

## 5. Features

- **_Home:_** A display of all `Categories` . Also includes displays `products` belonging to that `Categories`.
- **_Authentication:_** `Register` and `login` page for user sign-in and get `AccessToken` with `RefreshToken`.
- **_Search:_** `Search Section` is used to search among products and showing result finally by pressing the `Enter` key, the search result is transferred to a separate page with a filter option.
- **_Categories:_** `Categories` page displaying all products related to the category with filter options.
- **_Product:_** `Product` page displaying product information that include `title`, `imageShowCase`, `price`, `description` and `size section` for choosing size also include `favorite` and `add to cart `button.
- **_Cart:_** Displays a list of products added to the `Cart`.
- **_Profile:_** Displays `ordered` and `favorite` products.

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>
