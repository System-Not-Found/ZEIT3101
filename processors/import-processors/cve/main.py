import nvdlib
import os
from stix2 import Vulnerability, Relationship, CourseOfAction, Bundle
from zeit3101helpers import Helper


class CVEProcessor:
    def start():
        print("Pushing data...")
        CVEProcessor.send_stix_bundles()
        print("Collected all data")

    @staticmethod
    def send_stix_bundles() -> Bundle:
        # Used to search for muliple types of CVE's https://nvdlib.com/en/latest/CVE.html#searching-cves for doco
        multipleResponse = nvdlib.searchCVE(
            pubStartDate="2022-04-1 00:00",
            keyword="windows",
            pubEndDate="2022-07-10 00:00",
            cvssV3Severity="HIGH",
            key=os.getenv("CVE_API_KEY"),
            limit=5,
        )
        print(len(multipleResponse))
        for eachCVE in multipleResponse:
            vulnerability = Vulnerability(
                name=str(eachCVE.id),
                description=str(
                    eachCVE.cve.description.description_data[0].value
                )
                + "More information can be found here:"
                + str(eachCVE.url)
                + "The CVS SCORE: "
                + str(eachCVE.v3score),
            )
            course_of_action = CourseOfAction(
                name="Update software",
                description="It is recommended you update the software of the that contains the identified vulnerability. More information can be found here:"
                + str(eachCVE.url),
            )
            relationship = Relationship(
                course_of_action, "mitigates", vulnerability
            )
            bundle = Bundle(
                objects=[vulnerability, course_of_action, relationship]
            )
            Helper.send_stix_bundle(bundle)


if __name__ == "__main__":
    CVEProcessor.start()