import { useState, useEffect } from "react";

const scenarios = [
  {
    id: 1,
    title: "The Second Yellow",
    image: "/ep1.jpeg",
    episode: "EP. 01",
    minute: "67'",
    stakes: "League title race",
    setup: "A forward who already has a yellow card scores and sprints to the corner flag. He pulls up his shirt to reveal a plain white undershirt with 'RIP Mum' written on it in marker pen. His teammates knew, and hold back to let him have the moment. His mother died yesterday. The stadium falls quiet. Everyone in the ground knows the story.",
    question: "What do you do next?",
    correctRuling: "Second yellow, then red. Law 12 requires a caution for removing the shirt and for displaying a personal slogan. The law makes no exception for bereavement. The referee has no discretion here, however painful that is.",
    keyPrinciple: "Displaying a personal slogan on an undershirt is a cautionable offence. Bereavement is not listed as an exception. Law 12.",
    relevantLaw: "Law 12: 'A player is cautioned if... they remove their shirt or cover their head with their shirt or use the shirt to cover the head.' IFAB guidance confirms a message on an undershirt constitutes a slogan and carries the same caution.",
    imagePrompt: "A simple black and white line drawing of a footballer with shirt lifted revealing an undershirt with writing on it, teammates nearby, referee approaching with card visible. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 2,
    title: "The Captain's Confession",
    image: "/ep2.jpeg",
    episode: "EP. 02",
    minute: "45+2'",
    stakes: "Cup semi-final",
    setup: "Last action of the first half in a cup semi-final. You award a penalty for a foul in the box. Players are already walking off. The opposing captain comes over, calm, no aggression, and says quietly: 'Her standing foot was on the line, ref. It was outside.' Your assistant didn't flag. You thought it was in. The kick hasn't been taken.",
    question: "The players are waiting. What do you do?",
    correctRuling: "No. A player's word alone is not grounds to reverse a decision. Consult your assistant, if he saw nothing, the penalty stands. Law 5 permits changes before restart, but only on the referee's own realisation or on advice from an assistant or fourth official. An opposing player, however calm, is not a valid source.",
    keyPrinciple: "Only the referee's own realisation or assistant advice can reverse a decision. Not a player's word. Law 5.",
    relevantLaw: "Law 5: 'The referee may only change a decision on realising that it is incorrect or on the advice of an assistant referee or fourth official, provided that play has not been restarted.' A player's testimony is not listed as valid grounds.",
    imagePrompt: "A simple black and white line drawing of a football penalty area: a referee and a team captain standing close together talking near the penalty spot, players milling in the background, the penalty area markings clearly visible. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 3,
    title: "The Double Infringement",
    image: "/ep3.jpeg",
    episode: "EP. 03",
    minute: "88'",
    stakes: "Champions League semi-final",
    setup: "A penalty is awarded in the 88th minute. The kick is taken, the keeper saves it. VAR buzzes. The keeper moved off his line early, clear encroachment. But VAR has also flagged that the taker's technique was unusual. Before you signal the retake, your earpiece crackles: the analyst says both the taker's feet were off the ground when he struck the ball. He believes this is illegal. Nobody else on the pitch has noticed any of this.",
    question: "VAR has flagged two things. What is your next move?",
    correctRuling: "Retake, but not because of the taker's feet. Having both feet off the ground when striking a penalty is not illegal under Law 14. The only offence is the keeper's encroachment. The analyst was wrong. The retake stands on that basis alone.",
    keyPrinciple: "Keeper encroachment before the kick = retake. Both feet off the ground when striking is not an offence. Know the law before you act. Law 14.",
    relevantLaw: "Law 14 requires the kicker to kick the ball forward and not touch it again before another player does. It does not require the kicker's feet to remain on the ground. The keeper must remain on the goal line until the ball is kicked.",
    imagePrompt: "A simple black and white line drawing of a goalkeeper off his line mid-dive at penalty spot, referee holding earpiece with questioning expression, players watching. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 4,
    title: "The Armband Kiss",
    image: "/ep4.jpeg",
    episode: "EP. 04",
    minute: "79'",
    stakes: "League fixture",
    setup: "A section of the away support has been chanting homophobic slurs throughout the game. You have already requested a PA warning. An openly gay home player scores, sprints to the corner and kisses his rainbow captain's armband while holding eye contact with the section making the noise. Missiles immediately land on the pitch. Teammates form a protective circle. The fourth official radios that police are moving in.",
    question: "The stadium is watching. What do you do?",
    correctRuling: "This is the hardest call in the scenario. Technically, Law 12 allows a caution for a gesture that provokes or incites opponents or spectators. But applying it here, booking the victim of abuse for responding to that abuse, requires very careful judgement. Most referees would not apply it in these circumstances, given the sustained provocation. But if you do not apply the law consistently, you open yourself to challenge. Document everything. Your post-match report matters as much as your in-game decision.",
    keyPrinciple: "A gesture that provokes spectators can be cautionable. But context, proportionality and the duty to protect player welfare all apply. Law 12.",
    relevantLaw: "Law 12: A player may be cautioned for 'making gestures that provoke, incite or aggravate spectators.' This must be balanced against the referee's duty under Law 5 to protect players and ensure their safety.",
    imagePrompt: "A simple black and white line drawing of a footballer kissing his armband facing a crowd section, teammates forming a circle around him, referee watching nearby. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 5,
    title: "The Keeper Won't Come Off",
    image: "/ep5.jpeg",
    episode: "EP. 05",
    minute: "89'",
    stakes: "Relegation decider",
    setup: "The keeper takes a knock to the head making a save. He stays down. His captain jogs over: 'He's fine, ref. He has a medical condition, an abnormally thick skull, his doctor has it on file. He is genuinely less vulnerable to head injuries than a normal person.' The team has used all of its concussion substitutes. The keeper gets to his feet, still wobbly, and gives you a thumbs up. He cannot make eye contact.",
    question: "The keeper gives you a thumbs up. What do you do?",
    correctRuling: "No. Under current concussion protocols the referee has the authority, and the duty, to remove a player showing signs of concussion regardless of the player's own wishes. Dizziness, inability to make eye contact, and instability on his feet are textbook indicators. The team plays on with ten men and an outfield player in goal. Player welfare is not negotiable.",
    keyPrinciple: "Referee has authority to remove a player for medical reasons. A player cannot override concussion protocols by consent. Law 5.",
    relevantLaw: "Law 5 gives the referee authority to stop play and ensure injured players leave the field for assessment. IFAB's concussion protocols state that a player showing signs of concussion must be removed, regardless of substitutions remaining.",
    imagePrompt: "A simple black and white line drawing of a goalkeeper on his feet looking unsteady, thumb up, referee standing close examining him, captain nearby. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 6,
    title: "The Ghost Goal",
    image: "/ep6.jpeg",
    episode: "EP. 06",
    minute: "80'",
    stakes: "Title decider",
    setup: "It's the 80th minute of a title decider. A shot hammers off the underside of the crossbar, drops near the line and bounces back out. The keeper gathers and clears. Your assistant is 40 yards away and gives nothing. The striker is screaming it crossed. You were in position but, hand on heart, you are not certain.",
    question: "The players look to you. What is your call?",
    correctRuling: "No goal. The whole ball must cross the whole line. Without certainty from you or your assistant, you cannot award it. Play on.",
    keyPrinciple: "Whole ball. Whole line. Law 10.",
    relevantLaw: "Law 10 states: 'A goal is scored when the whole of the ball passes over the goal line, between the goalposts and under the crossbar.' If there is any doubt, the goal cannot be given.",
    imagePrompt: "A simple black and white line drawing of a football goalmouth scene: ball bouncing near the goal line off the underside of the crossbar, goalkeeper reaching for it, striker pointing at the line, referee watching from distance. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 7,
    title: "The Prosthetic Arm",
    image: "/ep7.jpeg",
    episode: "EP. 07",
    minute: "12'",
    stakes: "Youth cup",
    setup: "A young player scores with a fine finish in a youth cup tie. As you prepare to restart, the opposing coach objects: the player appeared to control the ball briefly with what looks like a prosthetic arm. The team sheet declared no disabilities. Their coach steps forward with documentation: the player was bullied out of their previous club after disclosing the prosthetic, and the family decided not to declare it this time out of fear it would happen again. It was in the local press.",
    question: "Everyone is waiting for your decision. What do you do?",
    correctRuling: "Yes. IFAB guidance is clear that players with limb deficiencies may participate, and that contact between the ball and a prosthetic limb does not constitute handball. The goal stands. The non-declaration is an administrative matter for the competition, not something to be resolved by disallowing a child's goal on the pitch.",
    keyPrinciple: "Contact with a prosthetic limb is not handball. A player with a limb deficiency may participate. The goal stands. IFAB guidance.",
    relevantLaw: "IFAB guidance on players with limb deficiencies states: 'If a player with a limb deficiency uses a prosthesis, the ball touching the prosthesis in the area of the missing limb is not an offence.' This applies regardless of declaration status.",
    imagePrompt: "A simple black and white line drawing of a young footballer celebrating a goal, referee watching, opposing coach approaching with papers, goalpost and net visible. Clean minimal sketch style, no shading, just clear outlines.",
  },
];
const bonusScenarios = [
  {
    id: 8,
    title: "Words in the Moment",
    image: "/bonus1.jpeg",
    episode: "BONUS 01",
    minute: "120'",
    stakes: "World Cup final, penalty shootout",
    setup: "The penalty shootout in the World Cup final. The score is level. A player steps up, strikes cleanly, but the keeper guesses right and saves it. He turns away, head in hands, and in clear distress says a deeply offensive racial slur out loud, directed at himself. Several players nearby heard it. One opposition player is visibly reacting. Your assistant raises an eyebrow at you.",
    question: "What do you do?",
    correctRuling: "You must act. Law 12 does not distinguish between a slur directed at others and one directed at oneself. Offensive, insulting or abusive language is a sending-off offence regardless of the target. In a World Cup final shootout, a red card here ends that player's participation. That is not a reason to look away. Document everything and act consistently with how you would respond if the slur had been directed at another player.",
    keyPrinciple: "Offensive or abusive language is a red card offence under Law 12, regardless of whether it is self-directed. Context does not change the law.",
    relevantLaw: "Law 12: A player is sent off for 'using offensive, insulting or abusive language and/or gestures.' The law does not require the language to be directed at another person. IFAB guidance confirms this applies to language directed at oneself.",
    imagePrompt: "A simple black and white line drawing of a footballer on their knees with head in hands near a penalty spot, goalkeeper in background, referee approaching, other players watching. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 9,
    title: "The Smart Watch",
    image: "/bonus2.jpeg",
    episode: "BONUS 02",
    minute: "93'",
    stakes: "Relegation decider",
    setup: "You award a penalty in the 93rd minute. As the taker places the ball, you notice the goalkeeper has a smartwatch on her wrist, partially hidden under tape. You call him over. She says she has a heart condition and her doctor has instructed her to wear it at all times to monitor his heart rate. She shows you a medical band on his other wrist. She says she wore it in last week's match without issue. The penalty is waiting.",
    question: "What do you do next?",
    correctRuling: "The watch must come off. Law 4 prohibits electronic devices and makes no exception for medical reasons during play. If she has a genuine medical condition requiring monitoring, that is a matter for the team doctor before kickoff, not the referee during a penalty. If she refuses to remove it, that is dissent and a caution. The penalty proceeds regardless.",
    keyPrinciple: "No electronic devices during play. Medical need is not a listed exemption. If a condition requires monitoring, the player should not be on the pitch. Law 4.",
    relevantLaw: "Law 4: 'Players must not use equipment or wear anything that is dangerous.' IFAB guidelines specifically prohibit electronic devices. There is no medical exemption listed in the Laws of the Game for wearable monitors during play.",
    imagePrompt: "A simple black and white line drawing of a goalkeeper with wrist tape being inspected by a referee near the penalty spot, taker waiting in background. Clean minimal sketch style, no shading, just clear outlines.",
  },
  {
    id: 10,
    title: "The Signal",
    image: "/bonus3.jpeg",
    episode: "BONUS 03",
    minute: "34'",
    stakes: "Europa League knockout stage",
    setup: "Play pauses for a minor injury. From the touchline, the home manager, who is deaf, uses sign language to communicate with his centre-back. You happen to be fluent in sign language. The manager is signing clearly and without a translator. The instruction is unambiguous: take out the opposition's star winger. Go in hard on the next challenge. Make it look like an accident. Get her off the pitch.",
    question: "What do you do next?",
    correctRuling: "Send the manager to the stands and report the instruction in full to the governing body. Discreetly warn the captains that you will be watching closely for any targeted foul play, without revealing what you understood. Player welfare is a referee's first responsibility under Law 5.",
    keyPrinciple: "Instructing a player to injure an opponent is gross misconduct. The medium of communication does not matter. Law 5.",
    relevantLaw: "Law 5: 'The referee has the authority to take action against team officials guilty of irresponsible behaviour and may expel them from the field of play.' Deliberately instructing dangerous play is a reportable offence regardless of the medium used.",
    imagePrompt: "A simple black and white line drawing of a manager on the touchline making hand gestures toward a defender on the pitch, referee watching from nearby. Clean minimal sketch style, no shading, just clear outlines.",
  },
];



const PIP_COLORS = {
  high:   { bg: "#538d4e", pip: "#538d4e", label: "#538d4e", text: "#1a1a1a" },
  mid:    { bg: "#b59f3b", pip: "#b59f3b", label: "#b59f3b", text: "#1a1a1a" },
  low:    { bg: "#c9414a", pip: "#c9414a", label: "#c9414a", text: "#1a1a1a" },
};

function getLevel(score) {
  return score >= 4 ? "high" : score >= 3 ? "mid" : "low";
}

const ScoreTile = ({ score, label, feedback, revealed, delay }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (revealed) {
      const t = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(t);
    } else setShow(false);
  }, [revealed, delay]);

  const level = getLevel(score);
  const c = PIP_COLORS[level];
  const pips = Array.from({ length: 5 }, (_, i) => i < score);

  return (
    <div style={{
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
      border: `2px solid ${c.bg}`,
      borderRadius: "4px",
      padding: "12px 14px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      background: "#fff",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: c.label, textTransform: "uppercase" }}>
          {label}
        </span>
        <div style={{ display: "flex", gap: "4px" }}>
          {pips.map((filled, i) => (
            <div key={i} style={{
              width: "10px", height: "10px", borderRadius: "2px",
              background: filled ? c.pip : "#d3d6da",
              transition: `background 0.2s ease ${i * 0.06}s`,
            }} />
          ))}
        </div>
      </div>
      <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", color: "#1a1a1a", lineHeight: "1.55", margin: 0 }}>
        {feedback}
      </p>
    </div>
  );
};

const ScenarioImage = ({ scenario }) => {
  const [svg, setSvg] = useState(null);
  const [loading, setLoading] = useState(!scenario.image);

  useEffect(() => {
    if (scenario.image) { setSvg(null); setLoading(false); return; }
    setSvg(null);
    setLoading(true);

    const prompt = `Generate a clean SVG illustration (viewBox="0 0 480 200") for this football referee scenario:

"${scenario.imagePrompt}"

Requirements:
- Simple, clear black line art on white background, like a newspaper sports cartoon
- Use only <line>, <circle>, <ellipse>, <path>, <rect>, <polyline>, <polygon> and <text> elements
- Stroke color: #1a1a1a, stroke-width 2, fill: none for lines, fill #1a1a1a for small filled shapes
- Include clear pitch markings (lines, arc) and 2–4 human figures as simple stick/outline figures
- Add 1–2 short text labels (font-family: sans-serif, font-size: 11, fill: #1a1a1a)
- No external images, no CSS classes, no JavaScript, no <style> block
- Output ONLY the raw SVG element starting with <svg and ending with </svg>, absolutely nothing else before or after`;

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    })
      .then(r => r.json())
      .then(data => {
        let text = data.content[0].text.trim();
        text = text.replace(/```svg|```xml|```/g, "").trim();
        const start = text.indexOf("<svg");
        const end = text.lastIndexOf("</svg>") + 6;
        if (start !== -1 && end > start) {
          setSvg(text.slice(start, end));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [scenario.id]);

  return (
    <div style={{
      width: "100%",
      border: "2px solid #d3d6da",
      borderRadius: "4px",
      overflow: "hidden",
      background: "#fafafa",
      minHeight: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    }}>
      {loading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "24px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: "8px", height: "8px", borderRadius: "50%", background: "#d3d6da",
                animation: `bounce 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
              }} />
            ))}
          </div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#999", letterSpacing: "1px" }}>
            ILLUSTRATING...
          </span>
        </div>
      )}
      {scenario.image && !loading && (
        <img src={scenario.image} alt={scenario.title}
          style={{ width: "100%", display: "block", maxHeight: "280px", objectFit: "cover" }} />
      )}
      {svg && !scenario.image && !loading && (
        <div style={{ width: "100%", lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: svg }} />
      )}
      {!svg && !scenario.image && !loading && (
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#999" }}>
          No illustration available
        </span>
      )}
    </div>
  );
};

export default function RefForADay() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [userResponse, setUserResponse] = useState("");
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState("intro");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [npsScore, setNpsScore] = useState(null);
  const [bonusUnlocked, setBonusUnlocked] = useState(false);
  const [allScenarios, setAllScenarios] = useState(scenarios);
  const [submitError, setSubmitError] = useState(null);

  const scenario = allScenarios[scenarioIndex];

  const submitResponse = async () => {
    if (!userResponse.trim() || loading) return;
    setLoading(true);

    try {
      const prompt = `You are scoring a user's response to a football referee scenario for a quiz app called "Ref for a Day", modelled on the "You Are The Ref" column by Keith Hackett.

SCENARIO: ${scenario.setup}
QUESTION: ${scenario.question}
CORRECT RULING: ${scenario.correctRuling}
KEY PRINCIPLE: ${scenario.keyPrinciple}
RELEVANT LAW: ${scenario.relevantLaw}

USER'S RESPONSE: "${userResponse}"

Score across 3 categories (1-5 each). Reward the spirit of the answer even if not perfectly worded.

For the referee_writeup: write practical, grounded refereeing discussion. Direct and conversational. Address the reader as "you". Talk about what a referee should do and why, consequences of getting it wrong, what the law is trying to achieve, how it plays out in the real game. Good examples: "You'll look very silly if you give that goal and the replay shows the ball never crossed." or "The lad's not entitled to be on the pitch, it doesn't matter how he played it, the goal can't stand." Bad examples: anything that invents personal career history or specific matches the writer officiated. No flowery language. 3-4 sentences max.

Return ONLY valid JSON, no markdown:

{
  "the_call": { "score": <1-5>, "feedback": "<one punchy sentence>" },
  "the_law": { "score": <1-5>, "feedback": "<one punchy sentence>" },
  "spirit_of_game": { "score": <1-5>, "feedback": "<one punchy sentence on fairness, game management, common sense>" },
  "verdict": "<one punchy 10-word max verdict>",
  "referee_writeup": "<practical refereeing discussion, 3-4 sentences>",
  "correct_ruling": "${scenario.correctRuling}"
}`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const text = data.content[0].text;
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setScores(parsed);
      setPhase("result");
      setTimeout(() => setRevealed(true), 150);
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const nextScenario = () => {
    setScenarioIndex((i) => i + 1);
    setUserResponse("");
    setScores(null);
    setRevealed(false);
    setPhase("scenario");
  };

  const submitEmail = async () => {
    if (!email.trim() || emailLoading) return;
    setEmailLoading(true);
    try {
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, nps: npsScore }),
      });
    } catch (e) { /* fail silently in prototype */ }
    setEmailSubmitted(true);
    setEmailLoading(false);
    // Unlock bonus scenarios
    setAllScenarios([...scenarios, ...bonusScenarios]);
    setBonusUnlocked(true);
  };

  const totalScore = scores
    ? scores.the_call.score + scores.the_law.score + scores.spirit_of_game.score
    : 0;

  const totalLevel = totalScore >= 12 ? "high" : totalScore >= 8 ? "mid" : "low";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f9f9f9; min-height: 100vh; }

        .app {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center;
          padding: 24px 16px 60px;
          max-width: 560px; margin: 0 auto;
          background: #fff;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
        }

        .header {
          width: 100%;
          text-align: center;
          padding-bottom: 16px;
          margin-bottom: 20px;
          border-bottom: 2px solid #1a1a1a;
        }

        .logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800; font-size: 26px;
          letter-spacing: 3px; color: #1a1a1a;
          text-transform: uppercase;
        }

        .logo-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; letter-spacing: 2px;
          color: #888; text-transform: uppercase;
          margin-top: 2px;
        }

        .meta-row {
          width: 100%;
          display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;
        }

        .chip {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 1px;
          text-transform: uppercase; padding: 3px 10px;
          border: 2px solid #1a1a1a; border-radius: 2px;
          color: #1a1a1a; background: #fff;
        }

        .episode-chip {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; padding: 3px 10px;
          border: 2px solid #1a1a1a; border-radius: 2px;
          color: #fff; background: #1a1a1a;
        }

        .scenario-title {
          font-family: 'Outfit', sans-serif;
          font-size: 28px; font-weight: 800;
          color: #1a1a1a; margin-bottom: 12px;
          letter-spacing: -0.5px; line-height: 1.1;
          width: 100%;
        }

        .scenario-text {
          font-family: 'Lora', serif;
          font-size: 16px; line-height: 1.75;
          color: #333; margin-bottom: 16px; width: 100%;
        }

        .question-row {
          width: 100%;
          display: flex; align-items: flex-start; gap: 10px;
          border: 2px solid #1a1a1a;
          border-left: 5px solid #1a1a1a;
          border-radius: 2px; padding: 12px 14px;
          margin-bottom: 16px;
          background: #f9f9f9;
        }

        .question-text {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 700;
          color: #1a1a1a; line-height: 1.3;
        }

        .input-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          color: #888; text-transform: uppercase;
          display: block; margin-bottom: 6px;
        }

        textarea {
          width: 100%;
          border: 2px solid #d3d6da;
          border-radius: 4px; padding: 12px;
          color: #1a1a1a;
          font-family: 'Lora', serif;
          font-size: 15px; line-height: 1.65;
          resize: none; outline: none;
          transition: border-color 0.15s;
          min-height: 100px; margin-bottom: 10px;
          background: #fff;
        }
        textarea:focus { border-color: #1a1a1a; }
        textarea::placeholder { color: #aaa; font-style: italic; }

        .submit-btn {
          width: 100%; background: #1a1a1a; color: #fff;
          border: none; border-radius: 4px; padding: 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; transition: all 0.15s;
        }
        .submit-btn:hover:not(:disabled) { background: #333; }
        .submit-btn:disabled { background: #d3d6da; color: #999; cursor: not-allowed; }

        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-6px); }
        }

        .results-section { width: 100%; }

        .verdict-bar {
          border: 2px solid #1a1a1a; border-radius: 4px;
          padding: 16px 18px; margin-bottom: 10px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 14px;
          background: #fff;
        }

        .total-score {
          font-family: 'Outfit', sans-serif;
          font-size: 52px; font-weight: 800; line-height: 1;
          color: #1a1a1a; white-space: nowrap;
        }
        .total-score span {
          font-size: 22px; color: #aaa; font-weight: 600;
        }

        .verdict-text {
          font-family: 'Lora', serif;
          font-style: italic; font-size: 15px;
          color: #333; line-height: 1.5;
        }

        .scores-grid {
          display: flex; flex-direction: column;
          gap: 8px; margin-bottom: 10px;
        }

        .ruling-box {
          border: 2px solid #d3d6da; border-radius: 4px;
          padding: 14px 16px; margin-bottom: 10px; background: #fff;
        }
        .ruling-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          color: #538d4e; text-transform: uppercase; margin-bottom: 6px;
        }
        .ruling-text {
          font-family: 'Lora', serif;
          font-size: 15px; line-height: 1.65; color: #1a1a1a;
        }

        .writeup-box {
          border: 2px solid #d3d6da;
          border-left: 5px solid #1a1a1a;
          border-radius: 0 4px 4px 0;
          padding: 16px 18px; margin-bottom: 14px; background: #f9f9f9;
        }
        .writeup-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          color: #1a1a1a; text-transform: uppercase; margin-bottom: 10px;
        }
        .writeup-text {
          font-family: 'Lora', serif;
          font-style: italic; font-size: 15px;
          line-height: 1.8; color: #333;
        }

        .next-btn {
          width: 100%; background: #fff; color: #1a1a1a;
          border: 2px solid #1a1a1a; border-radius: 4px; padding: 13px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; transition: all 0.15s;
        }
        .next-btn:hover { background: #1a1a1a; color: #fff; }

        .divider {
          width: 100%; height: 1px; background: #e0e0e0; margin: 12px 0;
        }

        .intro-screen {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 40px 24px;
          max-width: 560px; margin: 0 auto;
          background: #fff;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
          text-align: center;
        }

        .intro-whistle {
          font-size: 48px; margin-bottom: 24px;
        }

        .intro-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800; font-size: 42px;
          letter-spacing: -1px; color: #1a1a1a;
          line-height: 1; margin-bottom: 6px;
          text-transform: uppercase;
        }

        .intro-title span {
          display: block;
          font-size: 22px; font-weight: 700;
          letter-spacing: 4px; color: #888;
          margin-bottom: 4px;
        }

        .intro-divider {
          width: 48px; height: 3px;
          background: #1a1a1a; margin: 20px auto;
        }

        .intro-tagline {
          font-family: 'Lora', serif;
          font-size: 18px; line-height: 1.7;
          color: #444; max-width: 360px;
          margin: 0 auto 32px;
        }

        .intro-tagline strong {
          color: #1a1a1a; font-style: italic;
        }

        .start-btn {
          background: #1a1a1a; color: #fff;
          border: none; border-radius: 4px;
          padding: 16px 40px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          cursor: pointer; transition: all 0.15s;
        }
        .start-btn:hover { background: #333; transform: translateY(-1px); }

        .law-box {
          border: 2px solid #c9a800;
          border-radius: 4px;
          padding: 14px 16px; margin-bottom: 10px;
          background: #fffbea;
        }
        .law-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          color: #7a6200; text-transform: uppercase; margin-bottom: 6px;
        }
        .law-text {
          font-family: 'Lora', serif;
          font-size: 15px; line-height: 1.65;
          font-style: italic; color: #3a2e00;
        }

        .email-capture {
          width: 100%;
          border-top: 2px solid #1a1a1a;
          margin-top: 24px;
          padding-top: 20px;
          text-align: center;
        }
        .email-note {
          font-family: "Lora", serif;
          font-size: 15px; line-height: 1.65; color: #444;
          margin-bottom: 14px;
        }
        .email-row {
          display: flex; gap: 8px; width: 100%;
        }
        .email-input {
          flex: 1;
          border: 2px solid #d3d6da; border-radius: 4px;
          padding: 11px 12px;
          font-family: "Outfit", sans-serif; font-size: 14px;
          color: #1a1a1a; outline: none;
          transition: border-color 0.15s;
        }
        .email-input:focus { border-color: #1a1a1a; }
        .email-input::placeholder { color: #aaa; }
        .email-btn {
          background: #1a1a1a; color: #fff;
          border: none; border-radius: 4px; padding: 11px 16px;
          font-family: "Outfit", sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; white-space: nowrap; transition: background 0.15s;
        }
        .email-btn:hover:not(:disabled) { background: #333; }
        .email-btn:disabled { background: #d3d6da; cursor: not-allowed; }
        .email-thanks {
          font-family: "Outfit", sans-serif; font-size: 13px;
          font-weight: 700; letter-spacing: 1px; color: #538d4e;
          text-transform: uppercase; padding: 12px 0;
        }

        .fade-in {
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
      `}</style>

      {phase === "intro" && (
        <div className="intro-screen">
          <div className="intro-whistle">🟨</div>
          <div className="intro-title">
            <span>Ref for a</span>
            Day
          </div>
          <div className="intro-divider" />
          <p className="intro-tagline">
            Refereeing is hard.<br />
            Think you can do a better job?<br /><br />
            <strong>Let's find out.</strong>
          </p>
          <button className="start-btn" onClick={() => setPhase("scenario")}>
            Start now
          </button>
        </div>
      )}

      {phase === "done" && !npsScore && (
        <div className="intro-screen">
          <div className="intro-whistle">🟨</div>
          <div className="intro-title">
            <span>Enjoying</span>
            Ref for a Day?
          </div>
          <div className="intro-divider" />
          <p className="intro-tagline" style={{ marginBottom: "28px" }}>
            This is just a prototype.<br />
            How likely are you to share it with a friend?
          </p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", maxWidth: "360px", marginBottom: "12px" }}>
            {Array.from({ length: 11 }, (_, i) => (
              <button
                key={i}
                onClick={() => setNpsScore(i)}
                style={{
                  width: "44px", height: "44px",
                  border: "2px solid #1a1a1a", borderRadius: "4px",
                  background: "#fff", color: "#1a1a1a",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px", fontWeight: "700",
                  cursor: "pointer", transition: "all 0.12s",
                }}
                onMouseEnter={e => { e.target.style.background = "#1a1a1a"; e.target.style.color = "#fff"; }}
                onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = "#1a1a1a"; }}
              >{i}</button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "360px" }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#aaa", letterSpacing: "1px" }}>NOT LIKELY</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "11px", color: "#aaa", letterSpacing: "1px" }}>VERY LIKELY</span>
          </div>
        </div>
      )}

      {phase === "done" && npsScore !== null && !emailSubmitted && (
        <div className="intro-screen">
          <div className="intro-whistle">🎁</div>
          <div className="intro-title">
            <span>Want 3 more</span>
            bonus challenges?
          </div>
          <div className="intro-divider" />
          <p className="intro-tagline">
            Enter your details to find out when the full app goes live, and unlock 3 more scenarios right now.
          </p>
          <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <input
              className="email-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ width: "100%" }}
            />
            <div className="email-row">
              <input
                className="email-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") submitEmail(); }}
              />
              <button className="email-btn" onClick={submitEmail} disabled={emailLoading || !email.trim()}>
                {emailLoading ? "..." : "Unlock"}
              </button>
            </div>
          </div>
        </div>
      )}

      {phase === "done" && emailSubmitted && !bonusUnlocked && (
        <div className="intro-screen">
          <div className="intro-whistle">✓</div>
          <div className="intro-title"><span>You're on the list</span></div>
          <div className="intro-divider" />
          <p className="intro-tagline">Loading your bonus scenarios...</p>
        </div>
      )}

      {phase === "done" && bonusUnlocked && (
        <div className="intro-screen">
          <div className="intro-whistle">🎁</div>
          <div className="intro-title"><span>3 bonus</span>challenges unlocked</div>
          <div className="intro-divider" />
          <p className="intro-tagline">
            Three more scenarios have been added to the queue, starting with our most controversial yet.
          </p>
          <button className="start-btn" onClick={() => {
            setScenarioIndex(7);
            setUserResponse("");
            setScores(null);
            setRevealed(false);
            setPhase("scenario");
          }}>
            Play bonus rounds
          </button>
        </div>
      )}

      {phase !== "intro" && phase !== "done" && (
      <div className="app">
        {/* Header */}
        <div className="header">
          <div className="logo">Ref for a Day</div>
          <div className="logo-sub">You make the call</div>
        </div>

        {/* Meta */}
        <div className="meta-row">
          <span className="episode-chip">{scenario.episode}</span>
          <span className="chip">{scenario.minute}</span>
          <span className="chip">{scenario.stakes}</span>
        </div>

        {/* Title */}
        <div className="scenario-title">{scenario.title}</div>

        {/* AI Illustration */}
        <ScenarioImage scenario={scenario} />

        {/* Scenario text */}
        <p className="scenario-text">{scenario.setup}</p>

        {/* Question */}
        <div className="question-row">
          <span style={{ fontSize: "18px", flexShrink: 0 }}>🟨</span>
          <div className="question-text">{scenario.question}</div>
        </div>

        {phase === "scenario" && (
          <>
            <div style={{ width: "100%" }}>
              <label className="input-label">Your call</label>
              <textarea
                value={userResponse}
                onChange={(e) => { setUserResponse(e.target.value); setSubmitError(null); }}
                placeholder="Give your ruling. Cite the law if you know it…"
                onKeyDown={(e) => { if (e.key === "Enter" && e.metaKey) submitResponse(); }}
              />
            </div>
            <button className="submit-btn" onClick={submitResponse} disabled={loading || !userResponse.trim()}>
              {loading ? "Reviewing…" : "Blow the Whistle"}
            </button>
            {submitError && (
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "#c0392b", marginTop: "8px", textAlign: "center" }}>
                {submitError}
              </p>
            )}
          </>
        )}

        {phase === "result" && scores && (
          <div className="results-section">
            {/* Verdict */}
            <div className="verdict-bar fade-in" style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(8px)" }}>
              <div className="total-score">{totalScore}<span>/15</span></div>
              <div className="verdict-text">"{scores.verdict}"</div>
            </div>

            {/* Score tiles */}
            <div className="scores-grid">
              <ScoreTile score={scores.the_call.score} label="The Call" feedback={scores.the_call.feedback} revealed={revealed} delay={100} />
              <ScoreTile score={scores.the_law.score} label="The Law" feedback={scores.the_law.feedback} revealed={revealed} delay={300} />
              <ScoreTile score={scores.spirit_of_game.score} label="Spirit of the Game" feedback={scores.spirit_of_game.feedback} revealed={revealed} delay={500} />
            </div>

            {/* Ruling */}
            <div className="ruling-box fade-in" style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(6px)", transitionDelay: "0.75s" }}>
              <div className="ruling-label">✓ The correct ruling</div>
              <p className="ruling-text">{scores.correct_ruling}</p>
            </div>

            {/* Law quote, yellow highlight */}
            <div className="law-box fade-in" style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(6px)", transitionDelay: "0.9s" }}>
              <div className="law-label">📖 The law</div>
              <p className="law-text">{scenario.relevantLaw}</p>
            </div>

            {/* Ref's reflections */}
            <div className="writeup-box fade-in" style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(6px)", transitionDelay: "1.05s" }}>
              <div className="writeup-label">Ref's reflections</div>
              <p className="writeup-text">{scores.referee_writeup}</p>
            </div>

            {scenarioIndex < allScenarios.length - 1 ? (
              <button className="next-btn" onClick={nextScenario}>Next scenario →</button>
            ) : (
              <button className="next-btn" onClick={() => setPhase("done")}>Next →</button>
            )}

          </div>
        )}
      </div>
      )}
    </>
  );
}
