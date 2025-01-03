import { notFound } from 'next/navigation';

function fetchLessonData(lessonId) {
  const lessonsContent = {
    '0-1-join-gc': 'Content for "Join GC"',
    '0-2-info-form': 'Content for "Info Form"',
    '0-3-succeeding-in-this-course': 'Content for "Succeeding in this Course"',
    '0-4-quiz-unit-0': 'Content for "Unit 0 Quiz"',
    '1-1-early-computing': (
      <div className="content-wrapper">
        <div className="video-container">
          <h1>1.1 Early Computing</h1>
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/O5nskjZ_GoI?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=2"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>

        <div className="document-container">
          <h2>Read the Document</h2>
          <iframe
            width="800"
            height="600"
            src="https://docs.google.com/document/d/1gl43jQtidgKWolIR5x16mBojP1Rxgk03B2j39xEAxeg/view"
            allowFullScreen
            title="Document"
          ></iframe>
        </div>
      </div>
    ),
    '1-2-electronic-computing': 'Content for "Electronic Computing"',
    '1-3-parts-of-a-computer': 'Content for "Parts of a Computer"',
    '1-4-binary': 'Content for "Binary"',
    // Continue defining all lesson content...
  };

  return lessonsContent[lessonId] || null;
}

export default function LessonPage({ params }) {
  const { lesson } = params;

  // Fetch the lesson data
  const lessonData = fetchLessonData(lesson);

  if (!lessonData) {
    // If no lesson data is found, return a 404
    notFound();
  }

  // Format lesson title (optional, to remove dashes)
  const lessonTitle = lesson.replace(/-/g, ' ');

  return (
    <div>
      <h1>{lessonTitle}</h1>
      <div>{lessonData}</div>
    </div>
  );
}
