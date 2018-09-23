class SocialProfile{
    //fields or properties
   public Work:string
   public Education:string
   public PlacesLived:string
   public ContactInfo:number
   public Gender:string
   public DOB:string
   public BloodGroup:string
   public RelationshipStatus:string
   public FamilyMembers:number

    //constructor to initialize the fields
constructor(Work:string,Education:string,PlacesLived:string,ContactInfo:number,Gender:string,DOB:string,BloodGroup:string,RelationshipStatus:string,FamilyMembers:number){
    this.Work=Work
    this.Education=Education
    this.PlacesLived=PlacesLived
    this.ContactInfo=ContactInfo
    this.Gender=Gender
    this.DOB=DOB
    this.BloodGroup=BloodGroup
    this.RelationshipStatus=RelationshipStatus
    this.FamilyMembers=FamilyMembers
}//end constructor

getAge=(CY:number,YOB:number)=>{
let PresentAge = CY-YOB
return PresentAge
}

getWork=()=>{
    return this.Work
}

getEducation=()=>{
    return this.Education
}

getPlacesLived=()=>{
    return this.PlacesLived
}

getContactInfo=()=>{
    return this.ContactInfo
}

getGender=()=>{
    return this.Gender
}

getDOB=()=>{
    return this.DOB
}

getBloodGroup=()=>{
    return this.BloodGroup
}

getRelationshipStatus=()=>{
    return this.RelationshipStatus
}

getFamilyMembers=()=>{
    return this.FamilyMembers
}

}//end class

let SPObj= new SocialProfile("Microsoft","B.tech","pune",9000355567,"Male","21/10/1991","A+","Single",8)
let CurrentAge=SPObj.getAge(2018,1991)
let work=SPObj.getWork()
let education=SPObj.getEducation()
let placesLived=SPObj.getPlacesLived()
let contactInfo=SPObj.getContactInfo()
let gender=SPObj.getGender()
let dob=SPObj.getDOB()
let bloodGroup=SPObj.getBloodGroup()
let relshipstatus=SPObj.getRelationshipStatus()
let familyMembers=SPObj.getFamilyMembers()

console.log(CurrentAge)
console.log(work)
console.log(education)
console.log(placesLived)
console.log(contactInfo)
console.log(gender)
console.log(dob)
console.log(bloodGroup)
console.log(relshipstatus)
console.log(familyMembers)

//inheritance example
class SocialProfile2 extends SocialProfile{

    constructor(Work:string,Education:string,PlacesLived:string,ContactInfo:number,Gender:string,DOB:string,BloodGroup:string,RelationshipStatus:string,FamilyMembers:number){

    super(Work,Education,PlacesLived,ContactInfo,Gender,DOB,BloodGroup,RelationshipStatus,FamilyMembers)
    }
isSP2Exist=()=>{
    return true
}
 }//end sp2 class

 let AnotherProfile = new SocialProfile2("Microsoft","B.tech","pune",9000355567,"Male","21/10/1991","A+","Single",8)

  let Ap=AnotherProfile.isSP2Exist()

console.log(Ap)
