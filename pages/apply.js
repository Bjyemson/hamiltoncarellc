import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Apply({siteConfig}){
  const [form, setForm] = useState({name:'', email:'', phone:'', services:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/apply', {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(form)})
    if(res.ok){ setStatus('sent'); setForm({name:'',email:'',phone:'',services:''}) }
    else { const data = await res.json(); setStatus(data.error || 'error') }
  }

  return (
    <div className="font-[Poppins] bg-white text-[#0f172a]">
      <Header siteConfig={siteConfig} />
      <main className="container py-20">
        <div className="card" style={{maxWidth:720, margin:'0 auto'}}>
          <h2 className="text-2xl font-bold mb-4">Caregiver Application</h2>
          <p className="mb-4 text-gray-700">Join Hamilton Care. Fill the form and we will review your application.</p>
          <form onSubmit={submit} className="grid gap-3">
            <input placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-3 border rounded" required />
            <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-3 border rounded" required />
            <input placeholder="Phone (+1)" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="p-3 border rounded" required />
            <input placeholder="Services (comma)" value={form.services} onChange={e=>setForm({...form,services:e.target.value})} className="p-3 border rounded" required />
            <div style={{display:'flex', gap:8}}>
              <button className="btn-primary" type="submit">Submit Application</button>
              <button className="btn-ghost" type="button" onClick={()=>setForm({name:'',email:'',phone:'',services:''})}>Clear</button>
            </div>
            {status === 'sending' && <p>Sending...</p>}
            {status === 'sent' && <p className="text-green-600">Application saved — thanks!</p>}
            {status && status !== 'sending' && status !== 'sent' && <p className="text-red-600">{status}</p>}
          </form>
        </div>
      </main>
      <Footer siteConfig={siteConfig} />
    </div>
  )
}
