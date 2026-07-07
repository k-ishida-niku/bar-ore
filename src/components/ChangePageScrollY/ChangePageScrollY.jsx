import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ChangePageScrollY() {
  // 現在のURL（パス名）を取得
  const { pathname } = useLocation();

  useEffect(() => {
    // URLが変わった瞬間に、画面のスクロール位置を一番上（左上）に戻す
    window.scrollTo(0, 0);
  }, [pathname]); // pathname（URL）が変更されるたびにこの処理を実行

  return null; // 画面には何もレンダリングしない（処理だけ行う）
}
