

const checkAnalysis = async () => {
    const form = document.getElementById('Form');

    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const WBC = form.white.value;
    const RBC = form.red.value;
    const hgb = form.hgb.value;
    const hct = form.hct.value;
    const mcv = form.mcv.value;
    const platelet = form.platelet.value;
    const glucose = form.glucose.value;
    const calcium = form.calcium.value;
    const sodium = form.sodium.value;
    const potassium = form.potassium.value;
    const bicarbonate = form.bicarbonate.value;
    const chloride = form.chloride.value;
    const bun = form.bun.value;
    const creatinine = form.creatinine.value;
    const cholesterol = form.cholesterol.value;
    const hdl = form.hdl.value;
    const ldl = form.ldl.value;
    const triglycerides = form.triglycerides.value;

    try {
        const response = await askQuestion(`As a quick help please, you as a doctor give me a summary about 
        this patient and give me some recommendation and if he needs to visit the doctor or no: ${name}'s
         blood analysis reveals red blood cell count (${RBC} million cells/mcL), white blood cell count 
         (${WBC} cells/mcL), hemoglobin (${hgb}), hematocrit (${hct}), Mean Corpuscular Volume (${mcv}), 
         platelet count (${platelet}/mcL), glucose (${glucose} mg/dL), calcium (${calcium}), 
         sodium (${sodium} mmol/L), potassium (${potassium} mmol/L), Bicarbonate (${bicarbonate}),
          Chloride (${chloride}), BUN (${bun} mg/dL), creatinine (${creatinine} mg/dL), 
          total cholesterol (${cholesterol} mg/dL), HDL cholesterol (${hdl} mg/dL), 
          LDL cholesterol (${ldl} mg/dL), triglycerides (${triglycerides} mg/dL), TSH (2.5 mIU/L), and CRP (1.0 mg/L).
           And his age is ${age} years and his gender is ${gender} and please without saying that you cannot provide 
           medical advice Send results in Arabic and English.`)
    } catch (error) {
        console.error('Error:', error);
    }
}


// Bard API
async function askQuestion(question) {
    const response = await fetch('https://stale-mabelle-codex1-92b341b8.koyeb.app/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    });
    const data = await response.json();
    document.getElementById('result').innerText = data.answer;
}
