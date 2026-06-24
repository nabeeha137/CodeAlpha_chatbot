// ======================================
//  FAQ Database — faq.js
//  CodeAlpha Task 2
// ======================================

const FAQ_DB = [
  {
    id: 1, topic: 'ai',
    q: 'What is Artificial Intelligence?',
    keywords: ['what','is','artificial','intelligence','ai','define','meaning','explain'],
    a: 'Artificial Intelligence (AI) is a branch of computer science that enables machines to simulate human-like thinking, learning, and decision-making. It covers NLP, computer vision, robotics, and problem-solving.'
  },
  {
    id: 2, topic: 'ai',
    q: 'What is the difference between Deep Learning and Machine Learning?',
    keywords: ['deep','learning','machine','difference','between','vs','compare'],
    a: 'Machine Learning is a broad field where algorithms learn patterns from data. Deep Learning is a subset using multi-layered neural networks — it needs more data and compute but excels at images, speech, and complex tasks.'
  },
  {
    id: 3, topic: 'ai',
    q: 'What is a Neural Network?',
    keywords: ['neural','network','neuron','layers','nodes','brain'],
    a: 'A Neural Network is a computing system inspired by the human brain. It has interconnected nodes in layers — input, hidden, and output — that learn by adjusting weights through backpropagation.'
  },
  {
    id: 4, topic: 'ai',
    q: 'What is Natural Language Processing?',
    keywords: ['nlp','natural','language','processing','text','speech','understand'],
    a: 'NLP helps computers understand, interpret, and generate human language. Applications include chatbots, translation tools, sentiment analysis, and voice assistants like Siri or Alexa.'
  },
  {
    id: 5, topic: 'ml',
    q: 'How do I learn Machine Learning?',
    keywords: ['learn','machine','learning','start','begin','how','steps','roadmap'],
    a: 'To learn ML: (1) Master Python, (2) Study linear algebra, statistics & calculus, (3) Learn NumPy, Pandas, Scikit-learn, (4) Practice on Kaggle, (5) Take Andrew Ng\'s Coursera ML course. Consistent practice is key!'
  },
  {
    id: 6, topic: 'ml',
    q: 'What is supervised and unsupervised learning?',
    keywords: ['supervised','unsupervised','types','learning','labeled','unlabeled'],
    a: 'Supervised Learning uses labeled data — learning input-output pairs (e.g. spam detection). Unsupervised Learning uses unlabeled data — finding hidden patterns on its own (e.g. customer clustering).'
  },
  {
    id: 7, topic: 'ml',
    q: 'What is overfitting and how to prevent it?',
    keywords: ['overfitting','overfit','prevent','generalization','training','test','regularization'],
    a: 'Overfitting is when a model does well on training data but poorly on new data. Prevent it with Dropout, L1/L2 regularization, more diverse data, early stopping, or simplifying the model.'
  },
  {
    id: 8, topic: 'ml',
    q: 'What are the most popular ML algorithms?',
    keywords: ['algorithms','popular','types','list','common','regression','classification','forest'],
    a: 'Popular ML algorithms: Linear/Logistic Regression, Decision Trees, Random Forest, SVM, KNN, K-Means Clustering, and Neural Networks. The right choice depends on your data type and task.'
  },
  {
    id: 9, topic: 'python',
    q: 'Is Python good for beginners?',
    keywords: ['python','beginner','good','best','start','easy','first','language'],
    a: 'Absolutely! Python is the top choice for beginners — clean syntax, massive community, and dominant in AI/ML. Start learning at Python.org or freeCodeCamp.'
  },
  {
    id: 10, topic: 'python',
    q: 'How do I install Python libraries?',
    keywords: ['install','library','libraries','pip','package','how','numpy','pandas','tensorflow'],
    a: 'Use pip: run `pip install library_name` in your terminal. Examples: `pip install numpy`, `pip install tensorflow`. For isolated projects use `python -m venv myenv` first.'
  },
  {
    id: 11, topic: 'python',
    q: 'What Python libraries are used in AI?',
    keywords: ['python','libraries','ai','ml','tools','frameworks','tensorflow','pytorch','scikit'],
    a: 'Key AI libraries: TensorFlow & PyTorch (deep learning), Scikit-learn (ML), NumPy & Pandas (data), Matplotlib & Seaborn (visualization), OpenCV (computer vision), NLTK & SpaCy (NLP).'
  },
  {
    id: 12, topic: 'career',
    q: 'How to build a career in AI?',
    keywords: ['career','job','ai','build','how','scope','future','opportunity','field'],
    a: 'To build an AI career: (1) Degree in CS/Math/Stats, (2) Learn Python & ML frameworks, (3) Build GitHub projects, (4) Compete on Kaggle, (5) Strengthen LinkedIn, (6) Do internships like CodeAlpha!'
  },
  {
    id: 13, topic: 'career',
    q: 'What is the difference between a Data Scientist and ML Engineer?',
    keywords: ['data','scientist','ml','engineer','difference','role','job','analyst'],
    a: 'A Data Scientist focuses on analysis and insights — exploring data, answering business questions. An ML Engineer deploys and scales models in production. Both need ML skills but with different emphases.'
  },
  {
    id: 14, topic: 'general',
    q: 'Why is GPU important for AI?',
    keywords: ['gpu','graphics','card','hardware','why','important','training','cuda','nvidia'],
    a: 'GPUs excel at parallel processing — thousands of matrix calculations simultaneously. Training deep learning models runs 10–100x faster on GPU than CPU. NVIDIA GPUs with CUDA are the industry standard.'
  },
  {
    id: 15, topic: 'general',
    q: 'How does ChatGPT work?',
    keywords: ['chatgpt','gpt','openai','llm','large','language','model','how','works','transformer'],
    a: 'ChatGPT is a Large Language Model trained on massive internet text. It uses the Transformer architecture to understand context and predict the next word. RLHF was used to make it helpful and safe.'
  },
];
