import { useEffect, useState } from 'react';
import RequestPickup from './RequestPickup';

const STORAGE_KEY = 'ecoweb:pickup_popup_dismissed:v1';

type RequestPickupPopupProps = {
  delayMs?: number;
};

export default function RequestPickupPopup({ delayMs = 3000 }: RequestPickupPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === '1';
    if (dismissed) return;

    const t = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close pickup request popup"
        onClick={close}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="max-h-[85vh] overflow-auto">
          <div className="p-6 sm:p-8">
            <RequestPickup variant="modal" />
          </div>
        </div>
      </div>
    </div>
  );
}

