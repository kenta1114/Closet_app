import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag, User, Heart } from 'lucide-react';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderComplete } from './pages/OrderComplete';
import { useCartStore } from './store/useCartStore';

function App() {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <header>
          <div className="bg-black text-white text-xs py-1">
            <div className="container mx-auto px-4">
              <p className="text-center">全品送料無料 | 最短で翌日お届け</p>
            </div>
          </div>
          <nav className="border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link to="/" className="text-2xl font-bold tracking-tighter">
                  SHOP
                </Link>
                <div className="flex items-center gap-6">
                  <Link to="/favorites" className="flex flex-col items-center text-xs">
                    <Heart size={20} />
                    <span>お気に入り</span>
                  </Link>
                  <Link to="/account" className="flex flex-col items-center text-xs">
                    <User size={20} />
                    <span>マイページ</span>
                  </Link>
                  <Link
                    to="/cart"
                    className="flex flex-col items-center text-xs relative"
                  >
                    <ShoppingBag size={20} />
                    <span>カート</span>
                    {itemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="py-6">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 py-12 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">ショッピングガイド</h3>
                <ul className="space-y-2 text-sm">
                  <li>ご利用ガイド</li>
                  <li>お支払い方法</li>
                  <li>配送について</li>
                  <li>返品・交換について</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">カテゴリー</h3>
                <ul className="space-y-2 text-sm">
                  <li>メンズ</li>
                  <li>レディース</li>
                  <li>キッズ</li>
                  <li>ブランド一覧</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">会社情報</h3>
                <ul className="space-y-2 text-sm">
                  <li>会社概要</li>
                  <li>プライバシーポリシー</li>
                  <li>利用規約</li>
                  <li>お問い合わせ</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">SNS</h3>
                <ul className="space-y-2 text-sm">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                  <li>LINE</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center text-sm text-gray-600">
              <p>© 2024 SHOP All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;