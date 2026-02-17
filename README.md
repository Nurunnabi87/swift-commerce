## 1️⃣ `null` এবং `undefined` এর পার্থক্য

দুটোই “কোনো মান নেই” বোঝায়, কিন্তু ব্যবহার আলাদা।

### 🔹 `undefined` কী?

যখন কোনো ভ্যারিয়েবল declare করা হয় কিন্তু কোনো value দেওয়া হয় না, তখন সেটি `undefined` হয়।

<pre class="overflow-visible! px-0!" data-start="476" data-end="521"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>let</span><span> x;
</span><span>console</span><span>.</span><span>log</span><span>(x); </span><span>// undefined</span><span>
</span></span></code></div></div></pre>

👉 এখানে `x` আছে, কিন্তু এর কোনো মান দেওয়া হয়নি।

---

### 🔹 `null` কী?

`null` আমরা নিজেরা সেট করি।

এটি বোঝায় — “ইচ্ছাকৃতভাবে এখানে কোনো মান নেই।”

<pre class="overflow-visible! px-0!" data-start="675" data-end="722"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>let</span><span> y = </span><span>null</span><span>;
</span><span>console</span><span>.</span><span>log</span><span>(y); </span><span>// null</span><span>
</span></span></code></div></div></pre>

👉 এখানে আমরা ইচ্ছা করে বলছি, এই ভ্যারিয়েবলের কোনো মান নেই।

---

### ✅ সহজভাবে পার্থক্য

| undefined                  | null                                           |
| -------------------------- | ---------------------------------------------- |
| মান দেওয়া হয়নি | ইচ্ছা করে খালি রাখা হয়েছে |
| JavaScript নিজে দেয় | আমরা নিজে assign করি                |

## 2️⃣ `map()` কী? এটি `forEach()` থেকে আলাদা কেন?

### 🔹 `map()` কী করে?

`map()` একটি array থেকে নতুন array তৈরি করে।

<pre class="overflow-visible! px-0!" data-start="1081" data-end="1200"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>const</span><span> numbers = [</span><span>1</span><span>, </span><span>2</span><span>, </span><span>3</span><span>];

</span><span>const</span><span> doubled = numbers.</span><span>map</span><span>(</span><span>num</span><span> => num * </span><span>2</span><span>);

</span><span>console</span><span>.</span><span>log</span><span>(doubled); 
</span><span>// [2, 4, 6]</span><span>
</span></span></code></div></div></pre>

👉 এখানে প্রতিটি সংখ্যাকে ২ দিয়ে গুণ করে নতুন array বানানো হয়েছে।

---

### 🔹 `forEach()` কী করে?

`forEach()` শুধু প্রতিটি element এর উপর কাজ করে, কিন্তু নতুন array তৈরি করে না।

<pre class="overflow-visible! px-0!" data-start="1383" data-end="1441"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>numbers.</span><span>forEach</span><span>(</span><span>num</span><span> => {
  </span><span>console</span><span>.</span><span>log</span><span>(num);
});
</span></span></code></div></div></pre>

👉 এটি শুধু loop চালায়, কিছু return করে না।

---

### ✅ সহজ পার্থক্য

| map()                                       | forEach()                                  |
| ------------------------------------------- | ------------------------------------------ |
| নতুন array তৈরি করে              | নতুন array তৈরি করে না        |
| return করে                               | return করে না                         |
| Data পরিবর্তনের জন্য ভালো | শুধু কাজ করার জন্য ভালো |

## 3️⃣ `==` এবং `===` এর পার্থক্য

JavaScript-এ দুইভাবে comparison করা যায়।

---

### 🔹 `==` (Loose Equality)

এটি শুধু মান (value) তুলনা করে।

Type আলাদা হলেও মিলিয়ে ফেলে।

<pre class="overflow-visible! px-0!" data-start="1876" data-end="1903"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>5</span><span> == </span><span>"5"</span><span></span><span>// true</span><span>
</span></span></code></div></div></pre>

👉 কারণ JavaScript এখানে string কে number বানিয়ে তুলনা করে।

---

### 🔹 `===` (Strict Equality)

এটি মান এবং type — দুটোই তুলনা করে।

<pre class="overflow-visible! px-0!" data-start="2040" data-end="2069"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>5</span><span> === </span><span>"5"</span><span></span><span>// false</span><span>
</span></span></code></div></div></pre>

👉 কারণ number আর string এক না।

## 4️⃣ API Fetch করার সময় `async/await` কেন গুরুত্বপূর্ণ?

যখন আমরা API থেকে data আনি, তখন কিছু সময় লাগে।

এই কাজটি asynchronous হয়।

`async/await` ব্যবহার করলে কোড পড়তে সহজ হয়।

---

### উদাহরণ:

<pre class="overflow-visible! px-0!" data-start="2397" data-end="2630"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>async</span><span></span><span>function</span><span></span><span>getData</span><span>(</span><span></span><span>) {
  </span><span>try</span><span> {
    </span><span>const</span><span> response = </span><span>await</span><span></span><span>fetch</span><span>(</span><span>"https://api.example.com/data"</span><span>);
    </span><span>const</span><span> data = </span><span>await</span><span> response.</span><span>json</span><span>();
    </span><span>console</span><span>.</span><span>log</span><span>(data);
  } </span><span>catch</span><span> (error) {
    </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Error:"</span><span>, error);
  }
}
</span></span></code></div></div></pre>

---

### ✅ কেন ব্যবহার করবো?

* কোড সহজ ও পরিষ্কার হয়
* বুঝতে সুবিধা হয়
* Error সহজে ধরতে পারি (try/catch দিয়ে)
* Callback hell এ পড়তে হয় না

## 5️⃣ Scope কী? (Global, Function, Block)

Scope মানে — কোন জায়গা থেকে কোন ভ্যারিয়েবল ব্যবহার করা যাবে।

---

### 🔹 Global Scope

যদি ভ্যারিয়েবল সব জায়গা থেকে ব্যবহার করা যায়, তাহলে সেটি Global।

<pre class="overflow-visible! px-0!" data-start="2977" data-end="3049"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>let</span><span> name = </span><span>"Rahim"</span><span>;

</span><span>function</span><span></span><span>greet</span><span>(</span><span></span><span>) {
  </span><span>console</span><span>.</span><span>log</span><span>(name);
}
</span></span></code></div></div></pre>

👉 `name` যেকোনো জায়গা থেকে ব্যবহার করা যায়।

---

### 🔹 Function Scope

যদি ভ্যারিয়েবল কোনো function-এর ভিতরে থাকে, তাহলে বাইরে থেকে ব্যবহার করা যায় না।

<pre class="overflow-visible! px-0!" data-start="3207" data-end="3302"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>function</span><span></span><span>test</span><span>(</span><span></span><span>) {
  </span><span>let</span><span> age = </span><span>25</span><span>;
  </span><span>console</span><span>.</span><span>log</span><span>(age);
}

</span><span>// console.log(age); ❌ Error</span><span>
</span></span></code></div></div></pre>

👉 `age` শুধু function-এর ভিতরেই কাজ করবে।

---

### 🔹 Block Scope

যদি `{}` এর ভিতরে `let` বা `const` দিয়ে ভ্যারিয়েবল বানানো হয়, তাহলে সেটি শুধু ওই block-এর ভিতরে থাকবে।

<pre class="overflow-visible! px-0!" data-start="3477" data-end="3583"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>if</span><span> (</span><span>true</span><span>) {
  </span><span>let</span><span> message = </span><span>"Hello"</span><span>;
  </span><span>console</span><span>.</span><span>log</span><span>(message);
}

</span><span>// console.log(message); ❌ Error</span></span></code></div></div></pre>

## সংক্ষেপে

* `undefined` → মান দেওয়া হয়নি
* `null` → ইচ্ছা করে খালি রাখা হয়েছে
* `map()` → নতুন array তৈরি করে
* `forEach()` → শুধু loop চালায়
* `===` → নিরাপদ comparison
* `async/await` → API কাজ সহজ করে
* Scope → কোথায় ভ্যারিয়েবল ব্যবহার করা যাবে তা নির্ধারণ করে
