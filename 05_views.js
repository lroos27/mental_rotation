// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views

// This is the intro view to welcome the participants
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and a warm welcome to my mental-rotation experiment!
            <br />
            <br />
            I hope you will have as much fun as I had while creating this experiment.
            Thanks for attending and helping me to get significant results.
            <br />
            You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            This is a minimal experiment with one key choice view since you need to press either the key "f" or the key "j" during the tasks.
            <br />
            <br />
            More on this in the following instruction.`,
  buttonText: 'go to the instructions and begin the experiment'
});

// General instructions, intro to the practice trials
const instructions_general = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `Now we will tell you what to do and how this experiment will proceed.
            <br />
            <br />
            In the beginning there will be some practice trials to make you familiar with the procedure of the study.
            <br />
            <br />
            As soon as you start the trials you will see a picture showing two objects which are either the same or different.
            <br />
            Since this is a mental rotation study we will present to you the first <strong> object on the left as not rotated </strong> and the second <strong> object on the right as rotated to some degree </strong>.
            <br />
            <br />
            You are then supposed to judge if they are the same through pressing either the key "f" or the key "j".
            <br />
            <br />
            Pressing <strong>"f"</strong> means you perceive the two objects as the <strong> same object </strong>
            <br />
            Pressing <strong>"j"</strong> means you perceive them as <strong> different objects </strong>
            <br />
            <br />
            Please be aware to answer <strong> as fast as possible </strong> and to be prepared to press the corresponding keys!

            `,
  buttonText: 'go to the practice trials'
});

// Instructions for the main trials
const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions for the main task',
  text: `Now, the practice session is over and the main experiment will start.
            <br />
            Make sure to be as concentrated as before. Take your time and start as soon as you feel ready for the task.
            <br />
            <br />
            Please be aware to answer <strong> as fast as possible </strong> and to be prepared to press the corresponding keys!

            `,
  buttonText: 'begin the main task'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

// Here, we initialize the practice trials
const practice_trials = magpieViews.view_generator('key_press', {
    trials: 12,
    name: 'practice_trials',
    data: _.shuffle(trial_info_practice.key_press),
    pause: 250,
});

// Here, we initialize the main trials
const main_trials = magpieViews.view_generator('key_press', {
    trials: 48,
    name: 'main_trials',
    data: _.shuffle(trial_info_main.key_press),
    pause: 250,
});
