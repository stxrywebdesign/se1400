import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Contestant {
  id: number;
  name: string;
  age: number;
  hometown: string;
  occupation: string;
  image: string;
  placement: string;
  hohWins: number;
  vetoWins: number;
  bio: string;
  notableQuote: string;
  signature: string;
}

interface ContestantProfileProps {
  contestant: Contestant;
}

export function ContestantProfile({ contestant }: ContestantProfileProps) {
  return (
    <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
      <div className="p-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={contestant.image}
              alt={contestant.name}
              className="w-40 h-40 object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-gray-900 mb-2">{contestant.name}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700 mb-4">
              <div>
                <span className="text-gray-600">Age:</span> {contestant.age}
              </div>
              <div>
                <span className="text-gray-600">Hometown:</span> {contestant.hometown}
              </div>
              <div>
                <span className="text-gray-600">Occupation:</span> {contestant.occupation}
              </div>
              <div>
                <span className="text-gray-600">Placement:</span> <strong>{contestant.placement}</strong>
              </div>
              <div>
                <span className="text-gray-600">HOH Wins:</span> {contestant.hohWins}
              </div>
              <div>
                <span className="text-gray-600">Veto Wins:</span> {contestant.vetoWins}
              </div>
              <div className="col-span-2">
                <span className="text-gray-600">Game Style:</span> {contestant.signature}
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              {contestant.bio}
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-400 pl-4 py-2 italic text-gray-700">
              "{contestant.notableQuote}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
