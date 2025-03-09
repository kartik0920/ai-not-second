export const quizQuestions = [
  {
    id: 1,
    question:
      "The sun was beginning to set, casting golden hues across the tranquil lake. A fisherman sat quietly in his wooden boat, his line dipping into the still waters. The gentle ripple of fish breaking the surface created small waves that shimmered under the fading light. On the shore, children laughed as they skipped stones, each trying to outdo the last. Birds returned to their nests, filling the air with a soft chorus of evening songs. A cool breeze rustled through the tall reeds, carrying the earthy scent of damp soil. In the distance, a train rumbled softly, marking the passage of time in the sleepy countryside.",
    answer: false,
  },
  {
    id: 2,
    question:
      "Artificial intelligence has revolutionized the medical industry, enabling faster and more accurate diagnoses. By analyzing vast datasets, AI models can detect patterns in medical scans that even experienced doctors might overlook. These systems continuously learn, improving their ability to differentiate between benign and malignant conditions. In hospitals, AI-powered chatbots assist patients by answering basic health queries, reducing the workload on medical professionals. Robotic surgeries, guided by AI, ensure precision and minimize human error. Drug discovery has also accelerated, as machine learning algorithms predict molecular interactions. With every advancement, AI is reshaping the future of healthcare, making treatments more accessible and efficient.",
    answer: true,
  },
  {
    id: 3,
    question:
      "The morning air was crisp with the scent of pine, as a group of hikers made their way up the rugged mountain trail. The sound of crunching leaves beneath their boots mixed with the distant call of an eagle soaring overhead. Sunlight streamed through the dense canopy, creating shifting patterns of light and shadow on the forest floor. Occasionally, they would pause to admire the view, the valley below stretching endlessly into the horizon. A cool stream ran alongside the path, its waters crystal clear, reflecting the deep blue sky above. Wildflowers bloomed in patches along the trail, their colors vivid against the earthy backdrop. As they reached the peak, the wind picked up, carrying with it the exhilarating scent of adventure.",
    answer: false,
  },
  {
    id: 4,
    question:
      "In the rapidly evolving world of artificial intelligence, neural networks are becoming increasingly sophisticated. These complex systems, inspired by the human brain, process vast amounts of data to recognize speech, images, and even emotions. Machine learning algorithms refine themselves over time, adapting to new challenges without explicit programming. AI-powered recommendation engines suggest products based on user behavior, enhancing personalization in e-commerce. Self-learning chatbots engage in human-like conversations, adjusting their tone and vocabulary based on past interactions. In financial markets, AI analyzes historical trends to predict stock fluctuations with remarkable accuracy. As the technology advances, ethical considerations surrounding AI’s decision-making processes continue to grow.",
    answer: true,
  },
  {
    id: 5,
    question:
      "The old library stood at the corner of the cobblestone street, its towering shelves packed with books of every genre imaginable. Dust motes floated in the warm glow of antique lamps, illuminating leather-bound volumes that had seen generations of readers. The faint scent of aged paper filled the air, mixing with the subtle fragrance of fresh ink from newly printed works. A librarian moved gracefully between the aisles, her fingers trailing along the spines of forgotten classics. At a wooden desk, a young student scribbled notes, lost in the words of an ancient philosopher. Outside, rain began to fall softly against the stained-glass windows, creating a rhythmic pattern of gentle taps. The library, a sanctuary of stories and wisdom, stood timeless amidst the ever-changing world.",
    answer: false,
  },
  {
    id: 6,
    question:
      "In an advanced robotics lab, engineers worked tirelessly on humanoid machines capable of mimicking human movement with astonishing precision. Sensors embedded within the synthetic skin allowed the robots to detect temperature, texture, and pressure, improving their ability to interact with the physical world. AI-powered vision systems enabled them to recognize and respond to facial expressions, creating a more natural human-robot interaction. These intelligent machines were programmed to learn from experience, adapting to different environments and refining their problem-solving skills. In factories, robotic arms assembled products with impeccable accuracy, revolutionizing industrial production. Meanwhile, AI-driven assistants helped automate complex administrative tasks, improving efficiency across various sectors. As robotics advanced, the line between human capability and machine intelligence continued to blur.",
    answer: true,
  },
];

const token = sessionStorage.getItem("token");
export let myToken = JSON.parse(token);
export const teamname = myToken ? myToken.user.user_metadata.teamname : 0;
export const options = ["It's an AI", "It's not an AI"];
