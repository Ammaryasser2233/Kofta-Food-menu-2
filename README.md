<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>كفتة على الفحم | منيو</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --main: #d4511e;
            --main-light: #ff7a3d;
            --main-dark: #8b2e0a;
            --gold: #ffd700;
            --gold-dark: #daa520;
            --bg-dark: #0a0a0a;
            --bg-card: #1a1a1a;
            --text-main: #ffffff;
            --text-sub: #cccccc;
            --text-muted: #888888;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
        }

        /* ===== TOP CONTACT BAR ===== */
        .contact-bar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 70px;
            background: linear-gradient(90deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 26, 26, 0.98) 100%);
            backdrop-filter: blur(20px);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
            z-index: 1000;
            border-bottom: 4px solid var(--main);
            box-shadow: 0 10px 50px rgba(212, 81, 30, 0.3);
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-main);
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            color: var(--main-light);
            transform: translateY(-3px);
        }

        .contact-item i {
            font-size: 1.3rem;
            color: var(--main-light);
        }

        /* ===== BOTTOM LOCATION BAR ===== */
        .location-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 65px;
            background: linear-gradient(90deg, rgba(26, 26, 26, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            z-index: 1000;
            border-top: 4px solid var(--main);
            box-shadow: 0 -10px 50px rgba(212, 81, 30, 0.3);
        }

        .location-bar i {
            color: var(--gold);
            animation: pulse 2.5s infinite;
            font-size: 1.2rem;
        }

        .location-bar span {
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: 0.5px;
        }

        /* ===== FLOATING CART ===== */
        .cart-btn {
            position: fixed;
            bottom: 85px;
            left: 25px;
            width: 75px;
            height: 75px;
            background: linear-gradient(135deg, var(--main-light) 0%, var(--main) 100%);
            color: var(--text-main);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 15px 50px rgba(255, 122, 61, 0.5);
            cursor: pointer;
            z-index: 1100;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            border: 4px solid var(--gold);
        }

        .cart-btn:hover {
            transform: scale(1.2) rotate(15deg);
            box-shadow: 0 20px 70px rgba(255, 122, 61, 0.7);
        }

        .cart-btn i {
            font-size: 2rem;
        }

        .cart-count {
            position: absolute;
            top: -12px;
            right: -12px;
            background: linear-gradient(135deg, #ff4444, #cc0000);
            color: var(--text-main);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 900;
            border: 4px solid var(--gold);
            box-shadow: 0 6px 20px rgba(255, 68, 68, 0.5);
        }

        /* ===== HEADER ===== */
        header {
            background: linear-gradient(180deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.9) 100%);
            padding: 110px 20px 60px;
            text-align: center;
            margin-top: 70px;
            margin-bottom: 50px;
            position: relative;
            border-bottom: 3px solid var(--main);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .logo-box {
            position: relative;
            width: 220px;
            height: 220px;
            margin: 0 auto 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-frame {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 8px solid var(--main-light);
            border-radius: 50%;
            box-shadow: 
                0 0 0 4px var(--gold),
                0 0 0 10px var(--main-light),
                0 0 50px rgba(255, 122, 61, 0.5),
                inset 0 0 40px rgba(212, 81, 30, 0.2);
            animation: spinFrame 25s linear infinite;
        }

        .logo-frame::before {
            content: '';
            position: absolute;
            inset: -20px;
            border: 3px dashed var(--gold);
            border-radius: 50%;
            opacity: 0.7;
            animation: spinDash 35s linear infinite reverse;
        }

        .logo-img {
            width: 180px;
            height: 180px;
            object-fit: contain;
            z-index: 10;
            filter: drop-shadow(0 12px 35px rgba(0, 0, 0, 0.6));
            animation: floatLogo 4s ease-in-out infinite;
            transition: all 0.4s ease;
        }

        .logo-box:hover .logo-img {
            transform: scale(1.15) rotate(8deg);
        }

        .title {
            font-family: 'Playfair Display', serif;
            font-size: 4rem;
            font-weight: 900;
            background: linear-gradient(135deg, var(--main-light) 0%, var(--gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 12px;
            letter-spacing: -2px;
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--gold);
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 35px;
            position: relative;
            display: inline-block;
        }

        .subtitle::before,
        .subtitle::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, var(--main-light), transparent);
            transform: translateY(-50%);
        }

        .subtitle::before {
            right: 100%;
            margin-right: 20px;
        }

        .subtitle::after {
            left: 100%;
            margin-left: 20px;
            background: linear-gradient(90deg, transparent, var(--main-light));
        }

        /* ===== SOCIAL LINKS ===== */
        .social {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 40px 0 45px;
        }

        .social a {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--bg-card), var(--bg-dark));
            border: 2px solid var(--main);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .social a::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--main-light), var(--gold));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .social a:hover::before {
            opacity: 0.2;
        }

        .social a:hover {
            transform: translateY(-8px) scale(1.15);
            box-shadow: 0 15px 40px rgba(212, 81, 30, 0.4);
            border-color: var(--gold);
        }

        .social a i {
            position: relative;
            z-index: 2;
        }

        /* ===== SEARCH ===== */
        .search-box {
            max-width: 850px;
            margin: 0 auto 35px;
            padding: 0 20px;
        }

        .search-input {
            position: relative;
            margin-bottom: 30px;
        }

        .search-input input {
            width: 100%;
            padding: 18px 55px 18px 25px;
            border-radius: 15px;
            border: 2px solid var(--main);
            outline: none;
            background: var(--bg-card);
            font-size: 1.05rem;
            font-family: 'Cairo', sans-serif;
            color: var(--text-main);
            transition: all 0.4s ease;
        }

        .search-input input::placeholder {
            color: var(--text-muted);
        }

        .search-input input:focus {
            border-color: var(--main-light);
            box-shadow: 0 0 0 6px rgba(255, 122, 61, 0.15);
            background: linear-gradient(135deg, var(--bg-card), rgba(212, 81, 30, 0.05));
        }

        .search-input i {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--main-light);
            font-size: 1.3rem;
        }

        /* ===== CATEGORIES ===== */
        .categories {
            display: flex;
            gap: 15px;
            overflow-x: auto;
            padding: 10px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--main) transparent;
        }

        .categories::-webkit-scrollbar {
            height: 6px;
        }

        .categories::-webkit-scrollbar-thumb {
            background: var(--main);
            border-radius: 3px;
        }

        .cat-btn {
            padding: 14px 32px;
            background: var(--bg-card);
            border: 2px solid var(--main);
            border-radius: 25px;
            cursor: pointer;
            white-space: nowrap;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Cairo', sans-serif;
            color: var(--text-main);
            transition: all 0.4s ease;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
        }

        .cat-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--main-light), var(--gold));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .cat-btn:hover::before {
            opacity: 0.3;
        }

        .cat-btn:hover {
            border-color: var(--main-light);
            color: var(--gold);
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(212, 81, 30, 0.2);
        }

        .cat-btn.active {
            background: linear-gradient(135deg, var(--main-light) 0%, var(--main) 100%);
            color: var(--text-main);
            border-color: var(--gold);
            box-shadow: 0 15px 40px rgba(255, 122, 61, 0.4);
            transform: translateY(-5px) scale(1.05);
        }

        /* ===== MENU GRID ===== */
        .menu-container {
            padding: 30px 20px;
            margin-bottom: 80px;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 30px;
            max-width: 1700px;
            margin: 0 auto;
        }

        .product {
            background: linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 26, 26, 0.7) 100%);
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            border: 2px solid transparent;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .product::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255, 122, 61, 0.1), rgba(212, 81, 30, 0.05));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
            pointer-events: none;
        }

        .product:hover {
            transform: translateY(-25px);
            box-shadow: 0 35px 90px rgba(255, 122, 61, 0.35);
            border-color: var(--main-light);
        }

        .product:hover::before {
            opacity: 1;
        }

        .product-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: all 0.5s ease;
            position: relative;
            z-index: 2;
        }

        .product:hover .product-img {
            transform: scale(1.15);
        }

        .product-info {
            padding: 30px;
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
        }

        .product-name {
            font-weight: 800;
            font-size: 1.5rem;
            margin-bottom: 12px;
            color: var(--text-main);
            letter-spacing: -0.5px;
        }

        .product-desc {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin-bottom: 18px;
            line-height: 1.5;
            flex: 1;
        }

        .product-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(212, 81, 30, 0.2);
        }

        .price {
            display: flex;
            flex-direction: column;
        }

        .price-amount {
            color: var(--gold);
            font-weight: 900;
            font-size: 1.8rem;
            letter-spacing: -1px;
        }

        .price-unit {
            font-size: 0.85rem;
            color: var(--text-muted);
            font-weight: 600;
        }

        .add-btn {
            padding: 14px 28px;
            border: none;
            background: linear-gradient(135deg, var(--main-light) 0%, var(--main) 100%);
            color: var(--text-main);
            border-radius: 12px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.4s ease;
            font-size: 1rem;
            font-family: 'Cairo', sans-serif;
            box-shadow: 0 8px 25px rgba(255, 122, 61, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .add-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 35px rgba(255, 122, 61, 0.5);
        }

        /* ===== CART SIDEBAR ===== */
        .cart-sidebar {
            position: fixed;
            left: -100%;
            top: 0;
            width: 100%;
            max-width: 520px;
            height: 100%;
            background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%);
            z-index: 2000;
            box-shadow: -15px 0 60px rgba(0, 0, 0, 0.7);
            transition: left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            padding: 25px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            border-left: 4px solid var(--main);
        }

        .cart-sidebar.open {
            left: 0;
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 25px;
            border-bottom: 2px solid var(--main);
        }

        .cart-header h2 {
            font-size: 1.9rem;
            color: var(--text-main);
            font-weight: 900;
            letter-spacing: -1px;
        }

        .close-btn {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--text-main);
            transition: all 0.3s ease;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .close-btn:hover {
            background: rgba(212, 81, 30, 0.2);
            color: var(--main-light);
            transform: rotate(90deg);
        }

        .cart-items {
            flex: 1;
            overflow-y: auto;
            margin-bottom: 25px;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 0;
            border-bottom: 1px solid rgba(212, 81, 30, 0.15);
        }

        .item-info {
            flex: 1;
        }

        .item-name {
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 6px;
            font-size: 1.05rem;
        }

        .item-price {
            color: var(--gold);
            font-weight: 900;
            font-size: 1.2rem;
        }

        .qty-box {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(212, 81, 30, 0.15);
            padding: 10px 14px;
            border-radius: 10px;
            border: 1px solid rgba(212, 81, 30, 0.3);
        }

        .qty-btn {
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 900;
            color: var(--main-light);
            font-size: 1.2rem;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .qty-btn:hover {
            transform: scale(1.25);
            color: var(--gold);
        }

        .qty-num {
            font-weight: 800;
            color: var(--text-main);
            min-width: 25px;
            text-align: center;
            font-size: 1.1rem;
        }

        .cart-total {
            padding: 25px;
            background: linear-gradient(135deg, rgba(212, 81, 30, 0.15) 0%, rgba(255, 215, 0, 0.08) 100%);
            border-radius: 18px;
            margin-bottom: 25px;
            border: 2px solid var(--main);
            box-shadow: 0 10px 30px rgba(212, 81, 30, 0.15);
        }

        .total-label {
            font-size: 1rem;
            color: var(--text-muted);
            margin-bottom: 10px;
            font-weight: 700;
            letter-spacing: 1px;
        }

        .total-value {
            font-size: 2.3rem;
            font-weight: 900;
            background: linear-gradient(135deg, var(--main-light), var(--gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -1px;
        }

        .checkout-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, #25d366 0%, #1da851 100%);
            color: var(--text-main);
            border: none;
            border-radius: 15px;
            font-weight: 900;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.4s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: 'Cairo', sans-serif;
            box-shadow: 0 12px 40px rgba(37, 211, 102, 0.4);
            letter-spacing: 0.5px;
        }

        .checkout-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 50px rgba(37, 211, 102, 0.6);
        }

        .checkout-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .empty-msg {
            text-align: center;
            padding: 50px 20px;
            color: var(--text-muted);
        }

        .empty-msg i {
            font-size: 3.5rem;
            margin-bottom: 20px;
            opacity: 0.6;
            color: var(--main);
        }

        .empty-msg p {
            font-size: 1.1rem;
            font-weight: 600;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes spinFrame {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes spinDash {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes floatLogo {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .title {
                font-size: 2.8rem;
            }

            .menu-grid {
                grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                gap: 20px;
            }

            .contact-bar {
                height: 60px;
                gap: 25px;
            }

            .contact-item {
                font-size: 0.9rem;
            }

            .logo-img {
                width: 140px;
                height: 140px;
            }

            .logo-box {
                width: 170px;
                height: 170px;
                margin-bottom: 30px;
            }

            .logo-frame {
                border-width: 6px;
            }

            .social {
                gap: 12px;
            }

            .social a {
                width: 50px;
                height: 50px;
                font-size: 1.3rem;
            }

            header {
                padding: 80px 15px 35px;
                margin-bottom: 30px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 70px 15px 25px;
                margin-bottom: 20px;
            }

            .title {
                font-size: 2rem;
                margin-bottom: 5px;
            }

            .subtitle {
                font-size: 0.85rem;
                letter-spacing: 1.5px;
            }

            .subtitle::before,
            .subtitle::after {
                width: 20px;
            }

            .menu-grid {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 12px;
            }

            .product {
                border-radius: 18px;
            }

            .product-img {
                height: 180px;
            }

            .product-info {
                padding: 15px;
            }

            .product-name {
                font-size: 1.05rem;
            }

            .price-amount {
                font-size: 1.3rem;
            }

            .add-btn {
                padding: 12px 16px;
                font-size: 0.9rem;
            }

            .contact-bar {
                height: 55px;
                gap: 12px;
            }

            .contact-item {
                font-size: 0.8rem;
            }

            .cart-btn {
                width: 65px;
                height: 65px;
                bottom: 75px;
                left: 15px;
            }

            .cart-btn i {
                font-size: 1.6rem;
            }

            .cart-count {
                width: 32px;
                height: 32px;
                font-size: 0.8rem;
            }

            .location-bar {
                height: 55px;
                font-size: 0.9rem;
            }

            .logo-img {
                width: 110px;
                height: 110px;
            }

            .logo-box {
                width: 135px;
                height: 135px;
                margin-bottom: 15px;
            }

            .logo-frame {
                border-width: 5px;
            }

            .social {
                gap: 10px;
                margin: 15px 0 20px;
            }

            .social a {
                width: 42px;
                height: 42px;
                font-size: 1.1rem;
            }

            .search-input input {
                padding: 14px 45px 14px 16px;
                font-size: 0.95rem;
            }

            .cat-btn {
                padding: 12px 24px;
                font-size: 0.9rem;
            }

            .cart-sidebar {
                padding: 20px;
            }

            .cart-header h2 {
                font-size: 1.5rem;
            }

            .product-bottom {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }

            .add-btn {
                width: 100%;
            }
        }

        .no-scroll {
            overflow: hidden;
        }
    </style>
</head>
<body>
    <!-- TOP CONTACT BAR -->
    <div class="contact-bar">
        <a href="tel:0912244841" class="contact-item">
            <i class="fas fa-phone"></i> 0912244841
        </a>
        <a href="tel:0125088500" class="contact-item">
            <i class="fas fa-phone"></i> 0125088500
        </a>
    </div>

    <!-- BOTTOM LOCATION BAR -->
    <div class="location-bar">
        <i class="fas fa-map-marker-alt"></i>
        <span>دنقلا - شرق مستشفى الشرطة</span>
    </div>

    <!-- FLOATING CART -->
    <div class="cart-btn" onclick="toggleCart()">
        <i class="fas fa-shopping-basket"></i>
        <div class="cart-count" id="cartCount">0</div>
    </div>

    <!-- HEADER -->
    <header>
        <div class="logo-box">
            <div class="logo-frame"></div>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663071548584/CXdF84DqE7ssrus8kYorx2/kofta-logo_79fb0f2d.png" alt="لوجو كفتة على الفحم" class="logo-img" />
        </div>
        <h1 class="title">كفتة على الفحم</h1>
        <p class="subtitle">Kofta on Charcoal</p>

        <div class="social">
            <a href="https://www.facebook.com/share/17AXWsj3Px/" target="_blank" title="Facebook">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@kofta_on_charcoal?_r=1&_t=ZS-95YXUsrngYS" target="_blank" title="TikTok">
                <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://wa.me/0912244841" target="_blank" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>

        <div class="search-box">
            <div class="search-input">
                <i class="fas fa-search"></i>
                <input type="text" id="searchBox" placeholder="ماذا تشتهي اليوم؟" />
            </div>

            <div class="categories" id="catList"></div>
        </div>
    </header>

    <!-- MENU -->
    <div class="menu-container">
        <div class="menu-grid" id="menuGrid"></div>
    </div>

    <!-- CART SIDEBAR -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h2>سلة طلباتك</h2>
            <button class="close-btn" onclick="toggleCart()">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="cart-items" id="cartContent">
            <div class="empty-msg">
                <i class="fas fa-shopping-basket"></i>
                <p>السلة فارغة</p>
            </div>
        </div>

        <div class="cart-total">
            <div class="total-label">الإجمالي:</div>
            <div class="total-value" id="totalPrice">0 SDG</div>
        </div>

        <button class="checkout-btn" onclick="checkout()" id="checkoutBtn" disabled>
            <i class="fab fa-whatsapp"></i> إرسال الطلب عبر واتساب
        </button>
    </div>

    <!-- FIREBASE -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>

    <script>
        const firebaseConfig = {
            apiKey: "AIzaSyAI8AjUMmUdIP2IIchf7XTYZ2hcCa79aQ8",
            authDomain: "kofta-b2885.firebaseapp.com",
            projectId: "kofta-b2885",
            appId: "1:622180720773:web:b75bee4745d5a5482449ec",
        };

        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        let products = [];
        let cart = [];
        let activeCategory = "all";

        async function loadData() {
            try {
                const catSnap = await db.collection("categories").doc("all_categories").get();
                const categories = catSnap.data().data;
                const catList = document.getElementById("catList");
                
                catList.innerHTML = `<button class="cat-btn active" onclick="setCategory('all', this)">الكل</button>`;
                categories.forEach(c => {
                    catList.innerHTML += `<button class="cat-btn" onclick="setCategory('${c.id}', this)">${c.name}</button>`;
                });

                const prodSnap = await db.collection("products").doc("all_products").get();
                products = prodSnap.data().data.filter(p => p.available !== false);
                displayProducts(products);
            } catch (e) {
                console.error("Error:", e);
            }
        }

        function displayProducts(items) {
            const grid = document.getElementById("menuGrid");
            if (items.length === 0) {
                grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;"><i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px;"></i><p>لم نجد منتجات</p></div>`;
                return;
            }

            grid.innerHTML = items.map(p => `
                <div class="product fade-in">
                    <img src="${p.image}" class="product-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22%3E%3Crect fill=%22%23333%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%22150%22 y=%22150%22 font-size=%2220%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3Eصورة%3C/text%3E%3C/svg%3E'" />
                    <div class="product-info">
                        <h3 class="product-name">${p.name}</h3>
                        <p class="product-desc">${p.description || 'منتج لذيذ'}</p>
                        <div class="product-bottom">
                            <div class="price">
                                <div class="price-amount">${p.price}</div>
                                <div class="price-unit">SDG</div>
                            </div>
                            <button class="add-btn" onclick="addToCart('${p.id}')">
                                <i class="fas fa-plus"></i> إضافة
                            </button>
                        </div>
                    </div>
                </div>
            `).join("");
        }

        function setCategory(id, el) {
            activeCategory = id;
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            el.classList.add("active");
            filterProducts();
        }

        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("searchBox").addEventListener("input", filterProducts);
        });

        function filterProducts() {
            const query = document.getElementById("searchBox").value.toLowerCase();
            const filtered = products.filter(p => {
                const matchCat = activeCategory === "all" || p.category === activeCategory;
                const matchSearch = p.name.toLowerCase().includes(query);
                return matchCat && matchSearch;
            });
            displayProducts(filtered);
        }

        function addToCart(id) {
            const p = products.find(x => x.id === id);
            const exist = cart.find(x => x.id === id);
            if (exist) exist.qty++;
            else cart.push({...p, qty: 1});
            updateCart();

            const btn = document.querySelector(".cart-btn");
            btn.style.transform = "scale(1.3) rotate(20deg)";
            setTimeout(() => btn.style.transform = "scale(1) rotate(0deg)", 300);
        }

        function changeQty(id, n) {
            const item = cart.find(x => x.id === id);
            item.qty += n;
            if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
            updateCart();
        }

        function updateCart() {
            const total = cart.reduce((a, b) => a + b.qty, 0);
            document.getElementById("cartCount").innerText = total;

            const content = document.getElementById("cartContent");
            if (cart.length === 0) {
                content.innerHTML = `<div class="empty-msg"><i class="fas fa-shopping-basket"></i><p>السلة فارغة</p></div>`;
                document.getElementById("checkoutBtn").disabled = true;
            } else {
                content.innerHTML = cart.map(c => `
                    <div class="cart-item">
                        <div class="item-info">
                            <div class="item-name">${c.name}</div>
                            <div class="item-price">${c.price * c.qty} SDG</div>
                        </div>
                        <div class="qty-box">
                            <button class="qty-btn" onclick="changeQty('${c.id}', -1)">−</button>
                            <span class="qty-num">${c.qty}</span>
                            <button class="qty-btn" onclick="changeQty('${c.id}', 1)">+</button>
                        </div>
                    </div>
                `).join("");
                document.getElementById("checkoutBtn").disabled = false;
            }

            const sum = cart.reduce((a, b) => a + b.price * b.qty, 0);
            document.getElementById("totalPrice").innerText = `${sum} SDG`;
        }

        function toggleCart() {
            document.getElementById("cartSidebar").classList.toggle("open");
            document.body.classList.toggle("no-scroll");
        }

        function checkout() {
            if (cart.length === 0) return;
            let msg = "🍖 *طلب جديد من كفتة على الفحم* 🔥\n\n";
            cart.forEach(c => msg += `✓ ${c.name} × ${c.qty}\n`);
            const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
            msg += `\n💰 *الإجمالي: ${total} SDG*\n📍 *الموقع:* دنقلا - شرق مستشفى الشرطة`;
            window.open(`https://wa.me/0912244841?text=${encodeURIComponent(msg)}`, "_blank");
        }

        loadData();
    </script>
</body>
</html>
