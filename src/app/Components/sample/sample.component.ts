import { Component, input } from '@angular/core';
import { HomeService } from '../../Services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
selectedSubsystems: number[] = [];
selectedPartIds: number[] = [];
  selectedfile: File[] = [];
   formData = new FormData();
  files: string[] = [];   // 👈 declare here
constructor(
private homeservice: HomeService,
private http:HttpClient
){}

subsystems = [
  { id: 1, name: 'Subsystem A' },
  { id: 2, name: 'Subsystem B' },
  { id: 3, name: 'Subsystem C' },
  { id: 4, name: 'Subsystem D' },
];

parts = [
  { partId: 101, name: 'Part A1', subsystemId: 1 },
  { partId: 102, name: 'Part A2', subsystemId: 1 },
  { partId: 201, name: 'Part B1', subsystemId: 2 },
  { partId: 202, name: 'Part B2', subsystemId: 2 },
];

onSubsystemChange(event: any) {
  const currentSubsystems = event.value; // array of selected subsystem IDs

  const deselectedSubsystems = this.selectedSubsystems.filter(id => !currentSubsystems.includes(id));

  // Remove parts related to deselected subsystems
  this.selectedPartIds = this.selectedPartIds.filter(partId => {
    const part = this.parts.find(p => p.partId === partId);
    return part && !deselectedSubsystems.includes(part.subsystemId);
  });

  // Update selectedSubsystems
  this.selectedSubsystems = [...currentSubsystems];
}

onPartChange(event: any) {
  this.selectedPartIds = event.value;
}
onfileselect(event:Event): void{
const input = event.target as HTMLInputElement;
 if (input.files) {
    this.selectedfile = Array.from(input.files); // ✅ Convert FileList to File[]
  }
}
uploadfile(){
  debugger
  const files=this.selectedfile;
  if(files){
    for(let file of files){
          this.formData.append('file', file);
    }
   this.homeservice.postMethod("FileUpload/upload",this.formData).subscribe(res=>{
    console.log("file uploaded successfully");

   }
  );
  }

}

ngOnInit(): void {
    // Load files on page load
    this.http.get<string[]>('http://localhost:5286/apiUrlDotNet/FileUpload/files')
      .subscribe(data => {
        this.files = data;   // assign API response to files
      });
  }

  // ✅ Open file in new tab
  openFile(fileName: string) {
    fileName="Ashvini Bhavar FullStackDevloper.pdf"
    this.http.get(`http://localhost:5286/apiUrlDotNet/FileUpload/download/${fileName}`, {
      responseType: 'blob'
    }).subscribe((blob: Blob) => {
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL); // opens in new browser tab
    });
  }

  // ✅ Download file
  downloadFile(fileName: string) {
    this.http.get(`http:localhost:5286/apiUrlDotNet/FileUpload/download/${fileName}`, {
      responseType: 'blob'
    }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }


}





