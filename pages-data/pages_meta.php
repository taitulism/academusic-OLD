<?php defined ('_SEC') or die ('Access Denied!');

$pages_meta = array (
	'home' => array (
		'title' => 'אקדמיוזיק - האקדמיה למוסיקה',
		'kw' 	=> 'מוסיקה, מוזיקה, תאוריה, תיאוריה, תאוריה של המוסיקה',
		'desc'  => 'קורס אינטרנטי חינמי בתאוריה של המוסיקה',
		'p_id'	=> 'master'
	),
	
	'contact' => array (
		'title' => 'אקדמיוזיק - צור קשר',
		'kw' 	=> 'אקדמיוזיק, צור קשר',
		'desc'  => 'אקדמיוזיק - צור קשר',
		'p_id'	=> 'master',
		'js'	=> 'contact'
	),
	
	'about' => array (
		'title' => 'אקדמיוזיק - אודות',
		'kw' 	=> 'אקדמיוזיק, מי אני, אודות',
		'desc'  => 'אקדמיוזיק - אודות',
		'p_id'	=> 'master',
	),

	'chapters' => array (
		'title' => 'אקדמיוזיק - אודות',
		'kw' 	=> 'אקדמיוזיק, מי אני, אודות',
		'desc'  => 'אקדמיוזיק - אודות',
		'p_id'	=> 'master',
		'js'	=> 'chapters'
	),

	'404' => array (
		'title' => 'אקדמיוזיק - הדף לא קיים - 404',
		'kw' 	=> 'אקדמיוזיק, page not found, 404',
		'desc'  => 'אקדמיוזיק - העמוד שביקשת אינו קיים',
		'p_id'	=> 'master',
	),
	
	'intro' => array (
		'title' => 'אקדמיוזיק - הקדמה',
		'kw' 	=> 'אקדמיוזיק, הקדמה ללימודי מוסיקה, הקדמה ללימודי תיאוריה, מבוא',
		'desc'  => 'אקדמיוזיק - הקדמה',
		'p_id'	=> array_search('intro',$pages_order)
	),

	'course' => array (
		'title' => 'אקדמיוזיק - הקדמה',
		'kw' 	=> 'אקדמיוזיק, הקדמה ללימודי מוסיקה, הקדמה ללימודי תיאוריה, מבוא',
		'desc'  => 'אקדמיוזיק - הקדמה',
		'p_id'	=> array_search('course',$pages_order)
	),

	'sound_intro' => array (
		'title' => 'מהו צליל?',
		'kw' 	=> 'צליל, מהו צליל?, סאונד, גל קול, קול, תדירות, תדר',
		'desc'  => '',
		'p_id'	=> array_search('sound_intro',$pages_order)
	),

	'sound' => array (
		'title' => '',
		'kw' 	=> '',
		'desc'  => '',
		'p_id'	=> array_search('sound',$pages_order)
	),

	'pitch' => array (
		'title' => 'גובה הצליל',
		'kw' 	=> 'גובה הצליל, pitch',
		'desc'  => 'מה קובע את גובה הצליל?',
		'p_id'	=> array_search('pitch',$pages_order)
	),	
	
	'intervals_intro' => array (
		'title' => 'מבוא למרווחים',
		'kw' 	=> 'מרווח, מרווחים, מבוא, מהו מרווח מוסיקלי',
		'desc'  => 'מהו מרווח מוסיקלי',
		'p_id'	=> array_search('intervals_intro',$pages_order)
	),

	'melodic_vs_harmonic' => array (
		'title' => 'מרווח מלודי - מרווח הרמוני',
		'kw' 	=> 'מרווח, מרווחים, מרווח הרמוני, מרווח מלודי',
		'desc'  => 'מהו מרווח הרמוני, מהו מרווח מלודי',
		'p_id'	=> array_search('melodic_vs_harmonic',$pages_order)
	),

	'intervals_names' => array (
		'title' => 'שמות המרווחים',
		'kw' 	=> 'מרווח, מרווחים, שמות המרווחים, קטנה, גדולה, פרימה, סקונדה, טרצה, קוורטה, טריטון, סקסטה, ספטימה, אוקטבה, מלודי, הרמוני',
		'desc'  => 'שמות המרווחים, הסברים עם דוגמאות שמיעה',
		'p_id'	=> array_search('intervals_names',$pages_order)
	),


	'half_step' => array (
		'title' => 'חצי טון',
		'kw' 	=> 'חצי טון, חצי, טון',
		'desc'  => 'חלוקת האוקטבה לחצאי טונים. חצי טון הוא המרווח המוסיקלי הקטן ביותר במוסיקה המערבית',
		'p_id'	=> array_search('half_step',$pages_order)
	),

	'octave' => array (
		'title' => 'האוקטבה',
		'kw' 	=> 'אוקטבה, האוקטבה',
		'desc'  => 'הסבר על האוקטבה, איך היא נראית ואיך היא נשמעת',
		'p_id'	=> array_search('octave',$pages_order)
	),

	'perfect_intervals' => array (
		'title' => 'מרווחים זכים',
		'kw' 	=> 'מרווח זך, מרווחים זכים, קונסוננט, דיסוננט, אוקטבה, פרימה, קוורטה, קווניטה',
		'desc'  => 'מהם המרווחים הזכים',
		'p_id'	=> array_search('perfect_intervals',$pages_order)
	),
	
	'octave_division' => array (
		'title' => 'חלוקת האוקטבה',
		'kw' 	=> 'חלוקת האוקטבה, סולם כרומטי',
		'desc'  => 'איך האוקטבה מתחלקת לחצאי-טונים',
		'p_id'	=> array_search('octave_division',$pages_order),
		'js'	=> 'oct_pres'
	),
		
	'guitar_frets' => array (
		'title' => 'סריגי הגיטרה',
		'kw' 	=> 'סריגי הגיטרה, גיטרה, סריגים, עלייה לינארית, עלייה אקספוננציאלית, מתרחבים, מצטמצמים',
		'desc'  => 'מדוע המרווחים בין סריגי הגיטרה מתרחבים או מצטמצמים',
		'p_id'	=> array_search('guitar_frets',$pages_order)
	),
	
	'notes_names' => array (
		'title' => 'תולדות הצלילים',
		'kw' 	=> 'צלילים, שמות הצלילים, צלילי האוקטבה',
		'desc'  => 'תולדות הצלילים, צלילי האוקטבה',
		'p_id'	=> array_search('notes_names',$pages_order),
		'js'	=> 'oct_pres'
	),
	
	'notes_list' => array (
		'title' => 'רשימת הצלילים',
		'kw' 	=> 'צלילים, תווים, שמות הצלילים',
		'desc'  => 'רשימת צלילי האוקטבה',
		'p_id'	=> array_search('notes_list',$pages_order)
	),
	
	'accidentals_1' => array (
		'title' => 'דיאז ובמול',
		'kw' 	=> 'דיאז, במול, בקר',
		'desc'  => 'מהם הדיאז והבמול?',
		'p_id'	=> array_search('accidentals_1',$pages_order)
	),
	
	'accidentals_2' => array (
		'title' => ' דיאז ובמול - המשך',
		'kw' 	=> 'דיאז, במול, בקר',
		'desc'  => 'מהם הדיאז והבמול?',
		'p_id'	=> array_search('accidentals_2',$pages_order)
	),
	
	'summary_1' => array (
		'title' => '\'סיכום חלק א',
		'kw' 	=> 'סיכום חלק א',
		'desc'  => 'סיכום חלק א',
		'p_id'	=> array_search('summary_1',$pages_order)
	),

	'practice' => array (
		'title' => 'תרגול, תרגול, תרגול',
		'kw' 	=> 'מרווח, מרווחים, תרגול, תרגילים, פיתוח, פיתוח, שמיעה, מוסיקלית, מוזיקלית',
		'desc'  => 'חשיבות התרגול ופיתוח שמיעה מוזיקלית',
		'p_id'	=> array_search('practice',$pages_order)
	),

	'intervals_exercise_1' => array (
		'title' => 'תרגול מרווחים 1',
		'kw' 	=> 'מרווח, מרווחים, תרגול, תרגילים',
		'desc'  => 'תרגול מרווחים',
		'p_id'	=> array_search('intervals_exercise_1',$pages_order),
		'js'	=> 'int_ex1'
	),
	
	'intervals_exercise_2' => array (
		'title' => 'תרגול מרווחים 2',
		'kw' 	=> 'מרווח, מרווחים, תרגול, תרגילים',
		'desc'  => 'תרגול מרווחים',
		'p_id'	=> array_search('intervals_exercise_2',$pages_order),
		'js'	=> 'int_ex2'
	),

	'transposition' => array (
		'title' => 'טרנספוזיציה',
		'kw' 	=> 'טרנספוזיציה, מודולציה, מה זה, מהי',
		'desc'  => 'מהי טרנספוזיציה מוסיקלית',
		'p_id'	=> array_search('transposition',$pages_order)
	),
	
	'modulation' => array (
		'title' => 'מודלוציה',
		'kw' 	=> 'מודולציה, טרנספוזיציה, מה זה, מהי',
		'desc'  => 'סיכום פרק הצליל',
		'p_id'	=> array_search('modulation',$pages_order)
	),	

	'tuning' => array (
		'title' => 'כיוון כלים',
		'kw' 	=> 'כיוון, לכוון, כלים, כלי נגינה, טיונר, טיונר להורדה, קולן, שמיעה אבסולוטית, זיכרון שמיעתי, שמיעה יחסית',
		'desc'  => 'איך מכוונים כלי נגינה',
		'p_id'	=> array_search('tuning',$pages_order)
	),

	'guitar_strings' => array (
		'title' => 'מיתרי הגיטרה',
		'kw' 	=> 'גיטרה, מיתרים, מיתר',
		'desc'  => 'הכרת מיתרי הגיטרה',
		'p_id'	=> array_search('guitar_strings',$pages_order)
	),	
	
	'guitar_notes' => array (
		'title' => 'צלילי הגיטרה',
		'kw' 	=> 'גיטרה, צליל, צלילים',
		'desc'  => 'איך מכוונים גיטרה?',
		'p_id'	=> array_search('guitar_notes',$pages_order),
		'js'	=> 'guitar_notes'
	),	

	'guitar_tuning' => array (
		'title' => 'איך מכוונים גיטרה',
		'kw' 	=> 'גיטרה, כיוון, לכוון, מכוונים',
		'desc'  => 'איך מכוונים גיטרה?',
		'p_id'	=> array_search('guitar_tuning',$pages_order)
	),	
	
	'summary_2' => array (
		'title' => '\'סיכום חלק ב',
		'kw' 	=> 'סיכום חלק ב',
		'desc'  => 'סיכום חלק ב',
		'p_id'	=> array_search('summary_2',$pages_order)
	),

	'scales_intro' => array (
		'title' => 'מבוא לסולמות',
		'kw' 	=> 'סולמות, סולם, מוסיקלי, מוזיקלי',
		'desc'  => 'מבוא לסולמות מוסיקליים',
		'p_id'	=> array_search('scales_intro',$pages_order)
		
	),	
	
	'c_major' => array (
		'title' => 'סולם מז\'ור',
		'kw' 	=> 'סולם, מז\'ור',
		'desc'  => 'סולם מז\'ור',
		'p_id'	=> array_search('c_major',$pages_order),
		'js'	=> 'c_major'
	),

	'notes_vs_intervals' => array (
		'title' => 'צלילים לעומת מרווחים',
		'kw' 	=> 'צלילים, מרווחים',
		'desc'  => 'צלילים לעומת מרווחים',
		'p_id'	=> array_search('notes_vs_intervals',$pages_order)
	),

	'scale_building' => array (
		'title' => 'איך בונים סולם?',
		'kw' 	=> 'לבנות, בונים, סולם',
		'desc'  => 'איך לבנות סולם',
		'p_id'	=> array_search('scale_building',$pages_order)
	),

	'scales' => array (
		'title' => 'סולמות נפוצים',
		'kw' 	=> 'סולמות, נפוצים, סולם, מז\'ר, מינור, פנטטוני, חיג\'אז, כרומטי, טונים שלמים',
		'desc'  => 'איך לבנות סולם',
		'p_id'	=> array_search('scales',$pages_order)
	),

	'pagename' => array (
		'title' => '',
		'kw' 	=> '',
		'desc'  => '',
		'p_id'	=> array_search('',$pages_order)
	),
	
	'end' => array (
		'title' => 'זהו. בנתיים...',
		'kw' 	=> '',
		'desc'  => '',
		'p_id'	=> array_search('end',$pages_order)
	)
);
