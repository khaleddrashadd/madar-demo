const ChatInstructions = () => {
  return (
    <div className="px-3 pt-2 pb-3 rounded-md text-sm bg-primary-350 border border-primary-450 space-y-1 mt-1">
      <h4 className="font-semibold text-right text-ivory-950 border-b pr-2 pb-2 border-primary-450">
        :تعليمات
      </h4>
      <ul
        dir="rtl"
        className="list-disc list-inside space-y-1 text-right text-ivory-900 px-3"
      >
        <li>يجب إضافة ملف بصيغة PDF</li>
        <li>يجب ألا يزيد حجم الملف عن 25 ميجا</li>
      </ul>
    </div>
  );
};

export default ChatInstructions;
