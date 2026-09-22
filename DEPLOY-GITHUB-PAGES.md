# نشر الموقع على GitHub Pages (مجاني، بدون دومين)

الريبو جاهز فعليًا للنشر: فيه GitHub Actions workflow (`.github/workflows/deploy.yml`) هيعمل بناء (build) للموقع ونشر تلقائي كل مرة تعمل فيها push على main. مش محتاج تعمل أي حاجة يدوي غير الخطوات دي:

## 1. اعمل الريبو على GitHub

عندك خيارين حسب الرابط اللي عايزه:

**الخيار أ — رابط جذر نضيف (مُوصى بيه): `https://<username>.github.io/`**
اعمل ريبو اسمه بالظبط `<username>.github.io` (استبدل username باسم حسابك على GitHub). لازم يبقى الاسم مطابق تمامًا.

**الخيار ب — رابط فرعي: `https://<username>.github.io/onyx-website/`**
اعمل ريبو بأي اسم تاني (مثلاً `onyx-website`).

الـ workflow بيكتشف تلقائي أي خيار اخترته من اسم الريبو، ومش محتاج تعدل أي كود.

## 2. ارفع الكود

من جوه فولدر `onyx-website` (ده هيبقى جذر الريبو):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## 3. فعّل GitHub Pages

في صفحة الريبو على GitHub:
Settings → Pages → Build and deployment → Source → اختار **"GitHub Actions"**

بعد الـ push، الـ Action هيشتغل لوحده (تقدر تتابعه من تبويب Actions في الريبو)، وبعد ما يخلص (حوالي دقيقة-دقيقتين) الموقع هيبقى شغال على الرابط.

## 4. أي تحديث بعد كده

أي `git push` جديد على main هيعمل نشر تلقائي بالتحديثات — مفيش حاجة تانية تعملها.

---

### ملاحظات تقنية (لو حبيت تفهم أو تعدل حاجة)
- الموقع فيه routing من غير مكتبة خارجية (`src/router.jsx`)، وعملته يقرأ `base` مسار النشر تلقائيًا (`import.meta.env.BASE_URL`) عشان يشتغل صح سواء الرابط جذر أو فيه sub-path.
- `vite.config.js` بياخد الـ base path من متغير بيئة (`VITE_BASE_PATH`) بيحطه الـ workflow نفسه أوتوماتيك — مفيش حاجة مكتوبة يدوي.
- GitHub Pages مفيهاش server-side rewrites، فأي رابط مباشر زي `/services` كان هيدي 404 عند الفتح المباشر أو الـ refresh. اتعمل حل قياسي (`public/404.html` + سكريبت صغير في `index.html`) بيحول الطلب للصفحة الصح تلقائي.
- لو حبيت رابط دومين مخصوص بعدين (اشتريت دومين)، تقدر تضيفه من Settings → Pages → Custom domain من غير أي تعديل تاني في الكود.
