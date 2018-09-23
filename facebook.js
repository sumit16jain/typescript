var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SocialProfile = /** @class */ (function () {
    //constructor to initialize the fields
    function SocialProfile(Work, Education, PlacesLived, ContactInfo, Gender, DOB, BloodGroup, RelationshipStatus, FamilyMembers) {
        var _this = this;
        this.getAge = function (CY, YOB) {
            var PresentAge = CY - YOB;
            return PresentAge;
        };
        this.getWork = function () {
            return _this.Work;
        };
        this.getEducation = function () {
            return _this.Education;
        };
        this.getPlacesLived = function () {
            return _this.PlacesLived;
        };
        this.getContactInfo = function () {
            return _this.ContactInfo;
        };
        this.getGender = function () {
            return _this.Gender;
        };
        this.getDOB = function () {
            return _this.DOB;
        };
        this.getBloodGroup = function () {
            return _this.BloodGroup;
        };
        this.getRelationshipStatus = function () {
            return _this.RelationshipStatus;
        };
        this.getFamilyMembers = function () {
            return _this.FamilyMembers;
        };
        this.Work = Work;
        this.Education = Education;
        this.PlacesLived = PlacesLived;
        this.ContactInfo = ContactInfo;
        this.Gender = Gender;
        this.DOB = DOB;
        this.BloodGroup = BloodGroup;
        this.RelationshipStatus = RelationshipStatus;
        this.FamilyMembers = FamilyMembers;
    } //end constructor
    return SocialProfile;
}()); //end class
var SPObj = new SocialProfile("Microsoft", "B.tech", "pune", 9000355567, "Male", "21/10/1991", "A+", "Single", 8);
var CurrentAge = SPObj.getAge(2018, 1991);
var work = SPObj.getWork();
var education = SPObj.getEducation();
var placesLived = SPObj.getPlacesLived();
var contactInfo = SPObj.getContactInfo();
var gender = SPObj.getGender();
var dob = SPObj.getDOB();
var bloodGroup = SPObj.getBloodGroup();
var relshipstatus = SPObj.getRelationshipStatus();
var familyMembers = SPObj.getFamilyMembers();
console.log(CurrentAge);
console.log(work);
console.log(education);
console.log(placesLived);
console.log(contactInfo);
console.log(gender);
console.log(dob);
console.log(bloodGroup);
console.log(relshipstatus);
console.log(familyMembers);
//inheritance example
var SocialProfile2 = /** @class */ (function (_super) {
    __extends(SocialProfile2, _super);
    function SocialProfile2(Work, Education, PlacesLived, ContactInfo, Gender, DOB, BloodGroup, RelationshipStatus, FamilyMembers) {
        var _this = _super.call(this, Work, Education, PlacesLived, ContactInfo, Gender, DOB, BloodGroup, RelationshipStatus, FamilyMembers) || this;
        _this.isSP2Exist = function () {
            return true;
        };
        return _this;
    }
    return SocialProfile2;
}(SocialProfile)); //end sp2 class
var AnotherProfile = new SocialProfile2("Microsoft", "B.tech", "pune", 9000355567, "Male", "21/10/1991", "A+", "Single", 8);
var Ap = AnotherProfile.isSP2Exist();
console.log(Ap);
